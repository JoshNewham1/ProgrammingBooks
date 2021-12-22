import json

if __name__ == "__main__":
    # Add definitions to notebook JSON
    notebook_file = open("Glossary.ipynb")
    notebook_json = json.load(notebook_file)
    
    # Loop through and get the current order
    definitions = []
    indices = []
    count = 0
    for cell in notebook_json["cells"]:
        if cell["source"][0][0] != "#":
            definitions.append(cell)
            indices.append(count)
        count += 1
    
    # Sort the notebook cells by word
    definitions.sort(key=lambda cell: str(cell["source"][0]).lower())

    # Replace unsorted with sorted cells
    for i in sorted(indices):
        notebook_json["cells"][i] = definitions.pop(0)
    
    # Overwrite notebook file
    with open("Glossary.ipynb", "r+") as f:
        f.seek(0)
        f.write(json.dumps(notebook_json))
        f.truncate()