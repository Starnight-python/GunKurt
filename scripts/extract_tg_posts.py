import re, html as h

raw = open('/tmp/tg.html', encoding='utf-8').read()
blocks = re.split(r'<div class="tgme_widget_message ', raw)
want = {'4127', '4142', '4146', '4156', '4158', '4159'}
for b in blocks:
    m = re.search(r'data-post="gunkurtt/(\d+)"', b)
    if not m or m.group(1) not in want:
        continue
    pid = m.group(1)
    tm = re.search(r'<div class="tgme_widget_message_text[^"]*"[^>]*>(.*?)</div>\s*<div class="tgme_widget_message_footer', b, re.S)
    if not tm:
        tm = re.search(r'<div class="tgme_widget_message_text[^"]*"[^>]*>(.*?)</div>', b, re.S)
    if not tm:
        print(f'=== post {pid}: [media only, no text]')
        continue
    txt = tm.group(1)
    txt = re.sub(r'<br\s*/?>', '\n', txt)
    txt = re.sub(r'<[^>]+>', '', txt)
    txt = h.unescape(txt).strip()
    print(f'=== post {pid} ===')
    print(txt[:900])
    print()
