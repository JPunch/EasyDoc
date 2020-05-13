import json
from jinja2 import Environment, PackageLoader, select_autoescape


env = Environment(
    loader=PackageLoader('easydoc', 'template'),
    autoescape=select_autoescape(['html', 'j2'])
)


with open('example.json', 'r') as file:
    data = json.load(file)

print(data)

template = env.get_template('index.j2')

with open("site/index.html", 'w') as out_file:
    out_file.write(template.render(classes=data['classes']))