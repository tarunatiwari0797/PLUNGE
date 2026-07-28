import os

images_dir = r"C:\Users\Admin\Downloads\html files\assets\images"
os.makedirs(images_dir, exist_ok=True)

svgs = {
    "hero-bathroom.svg": {
        "w": 1920, "h": 900,
        "bg": "#0f1423",
        "icon": '<path d="M960 200 C960 200 700 450 700 600 C700 750 820 850 960 850 C1100 850 1220 750 1220 600 C1220 450 960 200 960 200Z" fill="none" stroke="#cbd5e1" stroke-width="3" opacity="0.6"/><path d="M960 320 C960 320 800 480 800 580 C800 680 870 740 960 740 C1050 740 1120 680 1120 580 C1120 480 960 320 960 320Z" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.4"/><line x1="960" y1="740" x2="960" y2="850" stroke="#cbd5e1" stroke-width="3" opacity="0.6"/><path d="M900 780 Q960 810 1020 780" fill="none" stroke="#cbd5e1" stroke-width="2" opacity="0.5"/>',
        "text": ""
    },
    "faucet-bathroom.svg": {
        "w": 800, "h": 600,
        "bg": "#f8fafc",
        "icon": '<rect x="250" y="100" width="300" height="400" rx="8" fill="none" stroke="#cbd5e1" stroke-width="2"/><path d="M350 200 Q400 150 450 200 L450 350 Q450 380 420 380 L380 380 Q350 380 350 350Z" fill="none" stroke="#0f1423" stroke-width="3"/><circle cx="400" cy="280" r="20" fill="none" stroke="#94a3b8" stroke-width="2"/><path d="M380 380 L380 450 Q380 470 400 470 Q420 470 420 450 L420 380" fill="none" stroke="#0f1423" stroke-width="2"/>',
        "text": ""
    },
    "faucet-product.svg": {
        "w": 400, "h": 400,
        "bg": "#f1f5f9",
        "icon": '<path d="M150 120 Q200 80 250 120 L250 280 Q250 310 220 310 L180 310 Q150 310 150 280Z" fill="none" stroke="#0f1423" stroke-width="2.5"/><circle cx="200" cy="200" r="15" fill="none" stroke="#94a3b8" stroke-width="2"/><path d="M180 310 L180 360 Q180 375 200 375 Q220 375 220 360 L220 310" fill="none" stroke="#0f1423" stroke-width="2"/>',
        "text": ""
    },
    "factory.svg": {
        "w": 800, "h": 600,
        "bg": "#1a2235",
        "icon": '<rect x="150" y="250" width="200" height="200" fill="none" stroke="#cbd5e1" stroke-width="2"/><rect x="350" y="200" width="150" height="250" fill="none" stroke="#cbd5e1" stroke-width="2"/><rect x="500" y="280" width="120" height="170" fill="none" stroke="#cbd5e1" stroke-width="2"/><line x1="170" y1="250" x2="170" y2="200" stroke="#94a3b8" stroke-width="2"/><line x1="190" y1="250" x2="190" y2="180" stroke="#94a3b8" stroke-width="2"/><rect x="180" y="300" width="30" height="40" fill="none" stroke="#94a3b8" stroke-width="1.5"/><rect x="230" y="300" width="30" height="40" fill="none" stroke="#94a3b8" stroke-width="1.5"/><rect x="380" y="250" width="40" height="50" fill="none" stroke="#94a3b8" stroke-width="1.5"/><rect x="440" y="250" width="40" height="50" fill="none" stroke="#94a3b8" stroke-width="1.5"/>',
        "text": ""
    },
    "shower-system.svg": {
        "w": 400, "h": 400,
        "bg": "#f1f5f9",
        "icon": '<rect x="185" y="50" width="30" height="250" rx="4" fill="none" stroke="#0f1423" stroke-width="2.5"/><rect x="160" y="50" width="80" height="20" rx="4" fill="none" stroke="#0f1423" stroke-width="2"/><line x1="175" y1="320" x2="225" y2="320" stroke="#94a3b8" stroke-width="2"/><path d="M175 320 L175 360" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M225 320 L225 360" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/><circle cx="200" cy="150" r="8" fill="none" stroke="#94a3b8" stroke-width="1.5"/>',
        "text": ""
    },
    "kitchen-fixture.svg": {
        "w": 600, "h": 400,
        "bg": "#f8fafc",
        "icon": '<path d="M200 350 Q200 200 250 150 Q300 100 350 150 L350 350" fill="none" stroke="#0f1423" stroke-width="3"/><circle cx="275" cy="250" r="12" fill="none" stroke="#94a3b8" stroke-width="2"/><rect x="180" y="350" width="40" height="20" rx="4" fill="none" stroke="#0f1423" stroke-width="2"/><rect x="330" y="350" width="40" height="20" rx="4" fill="none" stroke="#0f1423" stroke-width="2"/><path d="M350 200 L420 180" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>',
        "text": ""
    },
    "showroom.svg": {
        "w": 800, "h": 600,
        "bg": "#f8fafc",
        "icon": '<rect x="100" y="150" width="600" height="350" fill="none" stroke="#cbd5e1" stroke-width="2"/><rect x="130" y="180" width="200" height="290" fill="none" stroke="#e2e8f0" stroke-width="1.5"/><rect x="350" y="180" width="150" height="290" fill="none" stroke="#e2e8f0" stroke-width="1.5"/><rect x="520" y="180" width="150" height="290" fill="none" stroke="#e2e8f0" stroke-width="1.5"/><line x1="100" y1="500" x2="700" y2="500" stroke="#0f1423" stroke-width="3"/>',
        "text": ""
    },
    "water-texture.svg": {
        "w": 2000, "h": 800,
        "bg": "#0f1423",
        "icon": '<path d="M0 400 Q250 300 500 400 Q750 500 1000 400 Q1250 300 1500 400 Q1750 500 2000 400" fill="none" stroke="#cbd5e1" stroke-width="1.5" opacity="0.3"/><path d="M0 450 Q250 350 500 450 Q750 550 1000 450 Q1250 350 1500 450 Q1750 550 2000 450" fill="none" stroke="#94a3b8" stroke-width="1" opacity="0.2"/><path d="M0 350 Q250 250 500 350 Q750 450 1000 350 Q1250 250 1500 350 Q1750 450 2000 350" fill="none" stroke="#cbd5e1" stroke-width="1" opacity="0.2"/><path d="M0 500 Q250 400 500 500 Q750 600 1000 500 Q1250 400 1500 500 Q1750 600 2000 500" fill="none" stroke="#64748b" stroke-width="1" opacity="0.15"/>',
        "text": ""
    },
    "quality-lab.svg": {
        "w": 800, "h": 600,
        "bg": "#f8fafc",
        "icon": '<rect x="150" y="200" width="500" height="300" rx="8" fill="none" stroke="#cbd5e1" stroke-width="2"/><path d="M250 350 L300 280 L350 320 L400 250 L450 300" fill="none" stroke="#0f1423" stroke-width="2.5"/><circle cx="500" cy="280" r="40" fill="none" stroke="#94a3b8" stroke-width="2"/><path d="M485 280 L500 265 L515 280" fill="none" stroke="#94a3b8" stroke-width="1.5"/><line x1="500" y1="280" x2="500" y2="305" stroke="#94a3b8" stroke-width="1.5"/>',
        "text": ""
    },
    "bathroom-interior.svg": {
        "w": 800, "h": 600,
        "bg": "#f1f5f9",
        "icon": '<rect x="100" y="100" width="600" height="400" fill="none" stroke="#cbd5e1" stroke-width="2"/><rect x="130" y="200" width="180" height="250" rx="8" fill="none" stroke="#e2e8f0" stroke-width="1.5"/><rect x="350" y="150" width="120" height="300" fill="none" stroke="#e2e8f0" stroke-width="1.5"/><path d="M410 200 Q410 180 430 180 L450 180 Q470 180 470 200 L470 400" fill="none" stroke="#0f1423" stroke-width="2"/><rect x="520" y="250" width="140" height="200" rx="8" fill="none" stroke="#e2e8f0" stroke-width="1.5"/><line x1="100" y1="500" x2="700" y2="500" stroke="#94a3b8" stroke-width="2"/>',
        "text": ""
    },
    "manufacturing.svg": {
        "w": 2000, "h": 800,
        "bg": "#080b14",
        "icon": '<circle cx="1000" cy="400" r="120" fill="none" stroke="#cbd5e1" stroke-width="2" opacity="0.3"/><circle cx="1000" cy="400" r="80" fill="none" stroke="#94a3b8" stroke-width="1.5" opacity="0.4"/><circle cx="1000" cy="400" r="40" fill="none" stroke="#cbd5e1" stroke-width="2" opacity="0.5"/><line x1="1000" y1="280" x2="1000" y2="200" stroke="#94a3b8" stroke-width="1.5" opacity="0.3"/><line x1="1000" y1="520" x2="1000" y2="600" stroke="#94a3b8" stroke-width="1.5" opacity="0.3"/><line x1="880" y1="400" x2="800" y2="400" stroke="#94a3b8" stroke-width="1.5" opacity="0.3"/><line x1="1120" y1="400" x2="1200" y2="400" stroke="#94a3b8" stroke-width="1.5" opacity="0.3"/>',
        "text": ""
    },
    "gallery-faucet.svg": {
        "w": 800, "h": 800,
        "bg": "#f1f5f9",
        "icon": '<path d="M300 200 Q400 120 500 200 L500 500 Q500 550 450 550 L350 550 Q300 550 300 500Z" fill="none" stroke="#0f1423" stroke-width="3"/><circle cx="400" cy="350" r="25" fill="none" stroke="#94a3b8" stroke-width="2"/><path d="M350 550 L350 650 Q350 680 400 680 Q450 680 450 650 L450 550" fill="none" stroke="#0f1423" stroke-width="2.5"/><line x1="500" y1="300" x2="580" y2="280" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/>',
        "text": ""
    },
    "gallery-bathroom.svg": {
        "w": 800, "h": 600,
        "bg": "#f8fafc",
        "icon": '<rect x="80" y="80" width="640" height="440" fill="none" stroke="#cbd5e1" stroke-width="2"/><rect x="120" y="150" width="200" height="300" rx="12" fill="none" stroke="#e2e8f0" stroke-width="1.5"/><rect x="360" y="120" width="160" height="350" fill="none" stroke="#e2e8f0" stroke-width="1.5"/><circle cx="440" cy="250" r="30" fill="none" stroke="#94a3b8" stroke-width="2"/><rect x="560" y="200" width="120" height="250" rx="8" fill="none" stroke="#e2e8f0" stroke-width="1.5"/><line x1="80" y1="520" x2="720" y2="520" stroke="#94a3b8" stroke-width="1.5"/>',
        "text": ""
    },
    "installation.svg": {
        "w": 800, "h": 600,
        "bg": "#f8fafc",
        "icon": '<rect x="100" y="100" width="600" height="400" fill="none" stroke="#cbd5e1" stroke-width="2"/><path d="M250 250 Q300 200 350 250 L350 400 Q350 430 320 430 L280 430 Q250 430 250 400Z" fill="none" stroke="#0f1423" stroke-width="2.5"/><circle cx="300" cy="330" r="15" fill="none" stroke="#94a3b8" stroke-width="1.5"/><rect x="450" y="180" width="180" height="280" fill="none" stroke="#e2e8f0" stroke-width="1.5"/><line x1="100" y1="500" x2="700" y2="500" stroke="#94a3b8" stroke-width="1.5"/>',
        "text": ""
    },
    "craftsmanship.svg": {
        "w": 800, "h": 600,
        "bg": "#1a2235",
        "icon": '<circle cx="400" cy="280" r="100" fill="none" stroke="#cbd5e1" stroke-width="2" opacity="0.4"/><path d="M340 280 L370 250 L400 280 L430 250 L460 280" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.5"/><rect x="300" y="350" width="200" height="100" rx="8" fill="none" stroke="#cbd5e1" stroke-width="1.5" opacity="0.3"/><line x1="350" y1="400" x2="450" y2="400" stroke="#94a3b8" stroke-width="1.5" opacity="0.3"/>',
        "text": ""
    }
}

for filename, data in svgs.items():
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {data["w"]} {data["h"]}" width="{data["w"]}" height="{data["h"]}">
  <rect width="100%" height="100%" fill="{data["bg"]}"/>
  {data["icon"]}
</svg>'''
    filepath = os.path.join(images_dir, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(svg)
    print(f"Created: {filename}")

print(f"\nTotal: {len(svgs)} SVG images created")
