#!/usr/bin/env python3
"""
PLUNGE E-Commerce Website - Image Replacement Script

This script detects placeholder SVG images and replaces them with
real product photography from Unsplash.

Usage:
    python generate_images.py [--dry-run] [--download]

Options:
    --dry-run    Show what would be replaced without making changes
    --download   Download images locally instead of using URLs
"""

import os
import sys
import requests
from pathlib import Path

# Configuration
IMAGES_DIR = Path(__file__).parent / "assets" / "images"
REPLACEMENT_IMAGES = {
    # Background/Section images
    "hero-bathroom.svg": {
        "url": "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&h=900&fit=crop",
        "description": "Premium bathroom interior for hero section",
        "local_name": "hero-bathroom.jpg"
    },
    "faucet-bathroom.svg": {
        "url": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
        "description": "Modern bathroom with luxury faucet",
        "local_name": "faucet-bathroom.jpg"
    },
    "faucet-product.svg": {
        "url": "https://images.unsplash.com/photo-1564540583246-934409427776?w=400&h=400&fit=crop",
        "description": "Close-up chrome faucet product",
        "local_name": "faucet-product.jpg"
    },
    "factory.svg": {
        "url": "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop",
        "description": "Modern manufacturing facility",
        "local_name": "factory.jpg"
    },
    "shower-system.svg": {
        "url": "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=400&fit=crop",
        "description": "Luxury rainfall shower system",
        "local_name": "shower-system.jpg"
    },
    "kitchen-fixture.svg": {
        "url": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
        "description": "Modern kitchen faucet",
        "local_name": "kitchen-fixture.jpg"
    },
    "showroom.svg": {
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        "description": "Premium bathroom showroom",
        "local_name": "showroom.jpg"
    },
    "water-texture.svg": {
        "url": "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=2000&h=800&fit=crop",
        "description": "Abstract water texture for backgrounds",
        "local_name": "water-texture.jpg"
    },
    "quality-lab.svg": {
        "url": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        "description": "Quality control laboratory",
        "local_name": "quality-lab.jpg"
    },
    "bathroom-interior.svg": {
        "url": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=600&fit=crop",
        "description": "Luxury bathroom interior",
        "local_name": "bathroom-interior.jpg"
    },
    "manufacturing.svg": {
        "url": "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=2000&h=800&fit=crop",
        "description": "Manufacturing process close-up",
        "local_name": "manufacturing.jpg"
    },
    "gallery-faucet.svg": {
        "url": "https://images.unsplash.com/photo-1564540583246-934409427776?w=800&h=800&fit=crop",
        "description": "Large faucet product image",
        "local_name": "gallery-faucet.jpg"
    },
    "gallery-bathroom.svg": {
        "url": "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
        "description": "Bathroom gallery image",
        "local_name": "gallery-bathroom.jpg"
    },
    "installation.svg": {
        "url": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600&fit=crop",
        "description": "Professional installation",
        "local_name": "installation.jpg"
    },
    "craftsmanship.svg": {
        "url": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        "description": "Craftsmanship detail shot",
        "local_name": "craftsmanship.jpg"
    },
    
    # Product-specific images
    "diamond-bib-cock.svg": {
        "url": "https://images.unsplash.com/photo-1564540583246-934409427776?w=400&h=400&fit=crop",
        "description": "Diamond Bib Cock product",
        "local_name": "diamond-bib-cock.jpg"
    },
    "diamond-long-body.svg": {
        "url": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
        "description": "Diamond Long Body product",
        "local_name": "diamond-long-body.jpg"
    },
    "opal-prime-bib-cock.svg": {
        "url": "https://images.unsplash.com/photo-1564540583246-934409427776?w=400&h=400&fit=crop",
        "description": "Opal Prime Bib Cock product",
        "local_name": "opal-prime-bib-cock.jpg"
    },
    "opal-prime-sink-mixer.svg": {
        "url": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
        "description": "Opal Prime Sink Mixer product",
        "local_name": "opal-prime-sink-mixer.jpg"
    },
    "cosmo-sink-mixer.svg": {
        "url": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
        "description": "Cosmo Sink Mixer product",
        "local_name": "cosmo-sink-mixer.jpg"
    },
    "cosmo-bib-cock.svg": {
        "url": "https://images.unsplash.com/photo-1564540583246-934409427776?w=400&h=400&fit=crop",
        "description": "Cosmo Bib Cock product",
        "local_name": "cosmo-bib-cock.jpg"
    },
}

def download_image(url: str, save_path: Path) -> bool:
    """Download an image from URL and save locally."""
    try:
        response = requests.get(url, timeout=30, stream=True)
        response.raise_for_status()
        
        with open(save_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        print(f"  ✓ Downloaded: {save_path.name}")
        return True
    except Exception as e:
        print(f"  ✗ Failed to download {url}: {e}")
        return False

def create_url_mapping(dry_run: bool = False) -> None:
    """Create a mapping file showing URL replacements."""
    mapping_file = Path(__file__).parent / "IMAGE_MAPPING.md"
    
    with open(mapping_file, 'w', encoding='utf-8') as f:
        f.write("# IMAGE MAPPING\n\n")
        f.write("Auto-generated image replacement mapping.\n\n")
        f.write("| Placeholder | Replacement | Description |\n")
        f.write("|-------------|-------------|-------------|\n")
        
        for placeholder, info in REPLACEMENT_IMAGES.items():
            if dry_run:
                target = info['url']
            else:
                target = info['local_name']
            f.write(f"| {placeholder} | {target} | {info['description']} |\n")
    
    print(f"\nMapping file created: {mapping_file}")

def replace_html_references(dry_run: bool = False) -> None:
    """Replace SVG references in HTML files with new image references."""
    html_files = list(Path(__file__).parent.glob("*.html"))
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            modified = False
            for placeholder, info in REPLACEMENT_IMAGES.items():
                if placeholder in content:
                    if dry_run:
                        print(f"  Would replace {placeholder} in {html_file.name}")
                    else:
                        new_ref = info['local_name']
                        content = content.replace(placeholder, new_ref)
                        modified = True
                        print(f"  Replaced {placeholder} in {html_file.name}")
            
            if modified and not dry_run:
                with open(html_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                    
        except Exception as e:
            print(f"  Error processing {html_file.name}: {e}")

def main():
    """Main function."""
    dry_run = '--dry-run' in sys.argv
    download = '--download' in sys.argv
    
    print("=" * 60)
    print("PLUNGE Image Replacement Script")
    print("=" * 60)
    print(f"\nMode: {'Dry Run' if dry_run else 'Replace'}")
    print(f"Download: {'Yes' if download else 'No (use URLs)'}\n")
    
    # Ensure images directory exists
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)
    
    # Download images if requested
    if download and not dry_run:
        print("Downloading images...")
        downloaded = 0
        for placeholder, info in REPLACEMENT_IMAGES.items():
            save_path = IMAGES_DIR / info['local_name']
            if not save_path.exists():
                if download_image(info['url'], save_path):
                    downloaded += 1
            else:
                print(f"  Skipping {info['local_name']} (already exists)")
        
        print(f"\nDownloaded {downloaded} images")
    
    # Replace HTML references
    print("\nReplacing HTML references...")
    replace_html_references(dry_run)
    
    # Create mapping file
    print("\nCreating mapping file...")
    create_url_mapping(dry_run)
    
    print("\n" + "=" * 60)
    print("Done!")
    print("=" * 60)

if __name__ == "__main__":
    main()
