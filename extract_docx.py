
import zipfile
import xml.etree.ElementTree as ET
import sys
import os

def get_docx_text(path):
    try:
        if not zipfile.is_zipfile(path):
            print(f"Error: {path} is not a valid zip file.")
            return

        with zipfile.ZipFile(path) as document:
            xml_content = document.read('word/document.xml')
        
        tree = ET.fromstring(xml_content)
        
        # Namespaces usually used in docx
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        text_content = []
        
        body = tree.find('w:body', ns)
        if body is None:
            print("No body found in document")
            return

        for p in body.findall('w:p', ns):
            para_text = ""
            for r in p.findall('w:r', ns):
                text_val = ""
                t = r.find('w:t', ns)
                if t is not None:
                    text_val = t.text or ""
                
                if not text_val:
                    continue

                # Check formatting
                rPr = r.find('w:rPr', ns)
                is_bold = False
                is_italic = False
                if rPr is not None:
                    if rPr.find('w:b', ns) is not None:
                        is_bold = True
                    if rPr.find('w:i', ns) is not None:
                        is_italic = True
                
                # Apply markdown (simple heuristic)
                # Note: This is not perfect (nested, spacing issues etc), but better than nothing.
                # Adding spaces around formatting can be tricky, but let's just wrap the string.
                if is_bold:
                    text_val = f"**{text_val}**"
                if is_italic:
                    text_val = f"*{text_val}*"
                
                para_text += text_val
            
            # Simple handling to fix some markdown spacing issues like "** word**" -> " **word**"
            # forcing a basic cleanup might be needed but for now let's output raw.
            
            if para_text.strip():
                text_content.append(para_text)
            else:
                text_content.append("") 
                
        with open('temp_content_formatted.txt', 'w', encoding='utf-8') as f:
            f.write("\n\n".join(text_content)) # MD likes double newlines for paragraphs
        print("Successfully wrote formatted content to temp_content_formatted.txt")

    except Exception as e:
        import traceback
        traceback.print_exc()
        print(f"Error extracting text: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_docx.py <filename>")
    else:
        get_docx_text(sys.argv[1])
