import os
import math
from PIL import Image, ImageDraw, ImageFilter

def create_freshly_showcase():
    canvas_w, canvas_h = 1920, 1080
    
    # 1. Base canvas with dark architectural background
    canvas = Image.new('RGBA', (canvas_w, canvas_h), (0, 8, 28, 255))
    
    # 2. Draw subtle dot grid pattern
    dots = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    d_draw = ImageDraw.Draw(dots)
    grid_step = 32
    for x in range(0, canvas_w, grid_step):
        for y in range(0, canvas_h, grid_step):
            d_draw.ellipse([x - 1, y - 1, x + 1, y + 1], fill=(0, 103, 254, 30))
    canvas = Image.alpha_composite(canvas, dots)
    
    # 3. Ambient atmospheric glows
    glow = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    
    # Emerald green glow in center-left for fresh theme
    for r in range(450, 0, -25):
        alpha = int(22 * (1 - r / 450))
        g_draw.ellipse([canvas_w//2 - r, canvas_h//2 - r, canvas_w//2 + r, canvas_h//2 + r], fill=(16, 185, 129, alpha))
        
    # Blue glow on top-right for portfolio signature
    for r in range(500, 0, -30):
        alpha = int(20 * (1 - r / 500))
        g_draw.ellipse([canvas_w - 300 - r, 200 - r, canvas_w - 300 + r, 200 + r], fill=(0, 103, 254, alpha))
        
    canvas = Image.alpha_composite(canvas, glow)
    
    # 4. Helper for phone frame
    def make_phone(screenshot_path, screen_w, screen_h, corner_r=28, bezel=12):
        src = Image.open(screenshot_path).convert('RGBA')
        screen = src.resize((screen_w, screen_h), Image.Resampling.LANCZOS)
        
        # Screen mask
        screen_mask = Image.new('L', (screen_w, screen_h), 0)
        d = ImageDraw.Draw(screen_mask)
        d.rounded_rectangle([0, 0, screen_w, screen_h], radius=corner_r, fill=255)
        
        frame_w = screen_w + bezel * 2
        frame_h = screen_h + bezel * 2
        frame = Image.new('RGBA', (frame_w, frame_h), (0, 0, 0, 0))
        fd = ImageDraw.Draw(frame)
        
        # Titanium outer bezel
        fd.rounded_rectangle([0, 0, frame_w, frame_h], radius=corner_r + bezel, fill=(15, 23, 42, 255), outline=(51, 65, 85, 200), width=2)
        # Inner metallic rim
        fd.rounded_rectangle([bezel - 1, bezel - 1, bezel + screen_w + 1, bezel + screen_h + 1], radius=corner_r, outline=(30, 41, 59, 255), width=1)
        
        # Paste screen
        frame.paste(screen, (bezel, bezel), mask=screen_mask)
        
        # Sleek top dynamic island
        island_w = int(screen_w * 0.32)
        island_h = 24
        island_x = (frame_w - island_w) // 2
        island_y = bezel + 6
        island = Image.new('RGBA', (island_w, island_h), (0, 0, 0, 0))
        idraw = ImageDraw.Draw(island)
        idraw.rounded_rectangle([0, 0, island_w, island_h], radius=12, fill=(0, 0, 0, 245))
        idraw.ellipse([island_w - 18, 7, island_w - 9, 16], fill=(30, 41, 59, 200))
        frame.alpha_composite(island, (island_x, island_y))
        
        return frame

    # 5. Helper for drop shadow
    def add_shadow(base_canvas, obj, pos_x, pos_y, blur_r=40, offset_y=28, opacity=140):
        shadow = Image.new('RGBA', (base_canvas.width, base_canvas.height), (0, 0, 0, 0))
        s_draw = ImageDraw.Draw(shadow)
        ow, oh = obj.size
        # shadow shape
        s_draw.rounded_rectangle([pos_x + 8, pos_y + offset_y, pos_x + ow - 8, pos_y + oh + offset_y - 10], radius=45, fill=(0, 0, 0, opacity))
        shadow = shadow.filter(ImageFilter.GaussianBlur(blur_r))
        return Image.alpha_composite(base_canvas, shadow)

    # Base sizes
    # Side phones slightly scaled (0.92) and slightly lower
    side_w, side_h = 320, 712
    center_w, center_h = 356, 792
    
    left_phone = make_phone('c:/Users/SIS/OneDrive/Desktop/my-arsad/public/projects/freshly-categories.jpg', side_w, side_h)
    center_phone = make_phone('c:/Users/SIS/OneDrive/Desktop/my-arsad/public/projects/freshly-home.jpg', center_w, center_h)
    right_phone = make_phone('c:/Users/SIS/OneDrive/Desktop/my-arsad/public/projects/freshly-profile.jpg', side_w, side_h)

    # Positions
    # Center phone centered at canvas_w//2, y=144
    center_x = (canvas_w - center_phone.width) // 2
    center_y = 144
    
    # Left phone offset to left and shifted down
    left_x = center_x - left_phone.width + 50
    left_y = center_y + 60
    
    # Right phone offset to right and shifted down
    right_x = center_x + center_phone.width - 50
    right_y = center_y + 60

    # Composite shadows first, then side phones, then center shadow, then center phone
    canvas = add_shadow(canvas, left_phone, left_x, left_y, blur_r=35, offset_y=25, opacity=160)
    canvas = add_shadow(canvas, right_phone, right_x, right_y, blur_r=35, offset_y=25, opacity=160)
    canvas.paste(left_phone, (left_x, left_y), mask=left_phone)
    canvas.paste(right_phone, (right_x, right_y), mask=right_phone)
    
    # Center phone on top with deeper elevation shadow
    canvas = add_shadow(canvas, center_phone, center_x, center_y, blur_r=50, offset_y=35, opacity=200)
    canvas.paste(center_phone, (center_x, center_y), mask=center_phone)

    # 6. Save images
    out_dir = 'c:/Users/SIS/OneDrive/Desktop/my-arsad/public/projects/'
    png_path = os.path.join(out_dir, 'freshly-mobile-app.png')
    jpg_path = os.path.join(out_dir, 'freshly-mobile-app.jpg')
    
    canvas.save(png_path, format='PNG', optimize=True)
    canvas.convert('RGB').save(jpg_path, format='JPEG', quality=95)
    print(f'Saved composite mockups to {png_path} and {jpg_path}')

if __name__ == '__main__':
    create_freshly_showcase()
