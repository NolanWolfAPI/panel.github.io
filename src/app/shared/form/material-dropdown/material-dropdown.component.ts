import {Component, forwardRef, OnInit} from "@angular/core";
import {DropDownComponent} from "../dropdown/dropdown.component";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

export const MATERIAL_DROPDOWN_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MaterialDropDownComponent),
  multi: true
};

@Component ({
  selector: "material-dropdown",
  templateUrl: "../dropdown/dropdown.component.html",
  styleUrls: ["../dropdown/dropdown.component.scss"],
  providers: [MATERIAL_DROPDOWN_CONTROL_VALUE_ACCESSOR]
})
export class MaterialDropDownComponent extends DropDownComponent implements OnInit{

  ngOnInit() {
    this.options =
      [
        {key:'STONE', value:'STONE'},
        {key:'AIR', value:'AIR'},
        {key:'GRASS', value:'GRASS'},
        {key:'DIRT', value:'DIRT'},
        {key:'COBBLESTONE', value:'COBBLESTONE'},
        {key:'WOOD', value:'WOOD'},
        {key:'SAPLING', value:'SAPLING'},
        {key:'BEDROCK', value:'BEDROCK'},
        {key:'WATER', value:'WATER'},
        {key:'STATIONARY_WATER', value:'STATIONARY_WATER'},
        {key:'LAVA', value:'LAVA'},
        {key:'STATIONARY_LAVA', value:'STATIONARY_LAVA'},
        {key:'SAND', value:'SAND'},
        {key:'GRAVEL', value:'GRAVEL'},
        {key:'GOLD_ORE', value:'GOLD_ORE'},
        {key:'IRON_ORE', value:'IRON_ORE'},
        {key:'COAL_ORE', value:'COAL_ORE'},
        {key:'LOG', value:'LOG'},
        {key:'LEAVES', value:'LEAVES'},
        {key:'SPONGE', value:'SPONGE'},
        {key:'GLASS', value:'GLASS'},
        {key:'LAPIS_ORE', value:'LAPIS_ORE'},
        {key:'LAPIS_BLOCK', value:'LAPIS_BLOCK'},
        {key:'DISPENSER', value:'DISPENSER'},
        {key:'SANDSTONE', value:'SANDSTONE'},
        {key:'NOTE_BLOCK', value:'NOTE_BLOCK'},
        {key:'BED_BLOCK', value:'BED_BLOCK'},
        {key:'POWERED_RAIL', value:'POWERED_RAIL'},
        {key:'DETECTOR_RAIL', value:'DETECTOR_RAIL'},
        {key:'PISTON_STICKY_BASE', value:'PISTON_STICKY_BASE'},
        {key:'WEB', value:'WEB'},
        {key:'LONG_GRASS', value:'LONG_GRASS'},
        {key:'DEAD_BUSH', value:'DEAD_BUSH'},
        {key:'PISTON_BASE', value:'PISTON_BASE'},
        {key:'PISTON_EXTENSION', value:'PISTON_EXTENSION'},
        {key:'WOOL', value:'WOOL'},
        {key:'PISTON_MOVING_PIECE', value:'PISTON_MOVING_PIECE'},
        {key:'YELLOW_FLOWER', value:'YELLOW_FLOWER'},
        {key:'RED_ROSE', value:'RED_ROSE'},
        {key:'BROWN_MUSHROOM', value:'BROWN_MUSHROOM'},
        {key:'RED_MUSHROOM', value:'RED_MUSHROOM'},
        {key:'GOLD_BLOCK', value:'GOLD_BLOCK'},
        {key:'IRON_BLOCK', value:'IRON_BLOCK'},
        {key:'DOUBLE_STEP', value:'DOUBLE_STEP'},
        {key:'STEP', value:'STEP'},
        {key:'BRICK', value:'BRICK'},
        {key:'TNT', value:'TNT'},
        {key:'BOOKSHELF', value:'BOOKSHELF'},
        {key:'MOSSY_COBBLESTONE', value:'MOSSY_COBBLESTONE'},
        {key:'OBSIDIAN', value:'OBSIDIAN'},
        {key:'TORCH', value:'TORCH'},
        {key:'FIRE', value:'FIRE'},
        {key:'MOB_SPAWNER', value:'MOB_SPAWNER'},
        {key:'WOOD_STAIRS', value:'WOOD_STAIRS'},
        {key:'CHEST', value:'CHEST'},
        {key:'REDSTONE_WIRE', value:'REDSTONE_WIRE'},
        {key:'DIAMOND_ORE', value:'DIAMOND_ORE'},
        {key:'DIAMOND_BLOCK', value:'DIAMOND_BLOCK'},
        {key:'WORKBENCH', value:'WORKBENCH'},
        {key:'CROPS', value:'CROPS'},
        {key:'SOIL', value:'SOIL'},
        {key:'FURNACE', value:'FURNACE'},
        {key:'BURNING_FURNACE', value:'BURNING_FURNACE'},
        {key:'SIGN_POST', value:'SIGN_POST'},
        {key:'WOODEN_DOOR', value:'WOODEN_DOOR'},
        {key:'LADDER', value:'LADDER'},
        {key:'RAILS', value:'RAILS'},
        {key:'COBBLESTONE_STAIRS', value:'COBBLESTONE_STAIRS'},
        {key:'WALL_SIGN', value:'WALL_SIGN'},
        {key:'LEVER', value:'LEVER'},
        {key:'STONE_PLATE', value:'STONE_PLATE'},
        {key:'IRON_DOOR_BLOCK', value:'IRON_DOOR_BLOCK'},
        {key:'WOOD_PLATE', value:'WOOD_PLATE'},
        {key:'REDSTONE_ORE', value:'REDSTONE_ORE'},
        {key:'GLOWING_REDSTONE_ORE', value:'GLOWING_REDSTONE_ORE'},
        {key:'REDSTONE_TORCH_OFF', value:'REDSTONE_TORCH_OFF'},
        {key:'REDSTONE_TORCH_ON', value:'REDSTONE_TORCH_ON'},
        {key:'STONE_BUTTON', value:'STONE_BUTTON'},
        {key:'SNOW', value:'SNOW'},
        {key:'ICE', value:'ICE'},
        {key:'SNOW_BLOCK', value:'SNOW_BLOCK'},
        {key:'CACTUS', value:'CACTUS'},
        {key:'CLAY', value:'CLAY'},
        {key:'SUGAR_CANE_BLOCK', value:'SUGAR_CANE_BLOCK'},
        {key:'JUKEBOX', value:'JUKEBOX'},
        {key:'FENCE', value:'FENCE'},
        {key:'PUMPKIN', value:'PUMPKIN'},
        {key:'NETHERRACK', value:'NETHERRACK'},
        {key:'SOUL_SAND', value:'SOUL_SAND'},
        {key:'GLOWSTONE', value:'GLOWSTONE'},
        {key:'PORTAL', value:'PORTAL'},
        {key:'JACK_O_LANTERN', value:'JACK_O_LANTERN'},
        {key:'CAKE_BLOCK', value:'CAKE_BLOCK'},
        {key:'DIODE_BLOCK_OFF', value:'DIODE_BLOCK_OFF'},
        {key:'DIODE_BLOCK_ON', value:'DIODE_BLOCK_ON'},
        {key:'STAINED_GLASS', value:'STAINED_GLASS'},
        {key:'TRAP_DOOR', value:'TRAP_DOOR'},
        {key:'MONSTER_EGGS', value:'MONSTER_EGGS'},
        {key:'SMOOTH_BRICK', value:'SMOOTH_BRICK'},
        {key:'HUGE_MUSHROOM_1', value:'HUGE_MUSHROOM_1'},
        {key:'HUGE_MUSHROOM_2', value:'HUGE_MUSHROOM_2'},
        {key:'IRON_FENCE', value:'IRON_FENCE'},
        {key:'THIN_GLASS', value:'THIN_GLASS'},
        {key:'MELON_BLOCK', value:'MELON_BLOCK'},
        {key:'PUMPKIN_STEM', value:'PUMPKIN_STEM'},
        {key:'MELON_STEM', value:'MELON_STEM'},
        {key:'VINE', value:'VINE'},
        {key:'FENCE_GATE', value:'FENCE_GATE'},
        {key:'BRICK_STAIRS', value:'BRICK_STAIRS'},
        {key:'SMOOTH_STAIRS', value:'SMOOTH_STAIRS'},
        {key:'MYCEL', value:'MYCEL'},
        {key:'WATER_LILY', value:'WATER_LILY'},
        {key:'NETHER_BRICK', value:'NETHER_BRICK'},
        {key:'NETHER_FENCE', value:'NETHER_FENCE'},
        {key:'NETHER_BRICK_STAIRS', value:'NETHER_BRICK_STAIRS'},
        {key:'NETHER_WARTS', value:'NETHER_WARTS'},
        {key:'ENCHANTMENT_TABLE', value:'ENCHANTMENT_TABLE'},
        {key:'BREWING_STAND', value:'BREWING_STAND'},
        {key:'CAULDRON', value:'CAULDRON'},
        {key:'ENDER_PORTAL', value:'ENDER_PORTAL'},
        {key:'ENDER_PORTAL_FRAME', value:'ENDER_PORTAL_FRAME'},
        {key:'ENDER_STONE', value:'ENDER_STONE'},
        {key:'DRAGON_EGG', value:'DRAGON_EGG'},
        {key:'REDSTONE_LAMP_OFF', value:'REDSTONE_LAMP_OFF'},
        {key:'REDSTONE_LAMP_ON', value:'REDSTONE_LAMP_ON'},
        {key:'WOOD_DOUBLE_STEP', value:'WOOD_DOUBLE_STEP'},
        {key:'WOOD_STEP', value:'WOOD_STEP'},
        {key:'COCOA', value:'COCOA'},
        {key:'SANDSTONE_STAIRS', value:'SANDSTONE_STAIRS'},
        {key:'EMERALD_ORE', value:'EMERALD_ORE'},
        {key:'ENDER_CHEST', value:'ENDER_CHEST'},
        {key:'TRIPWIRE_HOOK', value:'TRIPWIRE_HOOK'},
        {key:'TRIPWIRE', value:'TRIPWIRE'},
        {key:'EMERALD_BLOCK', value:'EMERALD_BLOCK'},
        {key:'SPRUCE_WOOD_STAIRS', value:'SPRUCE_WOOD_STAIRS'},
        {key:'BIRCH_WOOD_STAIRS', value:'BIRCH_WOOD_STAIRS'},
        {key:'JUNGLE_WOOD_STAIRS', value:'JUNGLE_WOOD_STAIRS'},
        {key:'COMMAND', value:'COMMAND'},
        {key:'BEACON', value:'BEACON'},
        {key:'COBBLE_WALL', value:'COBBLE_WALL'},
        {key:'FLOWER_POT', value:'FLOWER_POT'},
        {key:'CARROT', value:'CARROT'},
        {key:'POTATO', value:'POTATO'},
        {key:'WOOD_BUTTON', value:'WOOD_BUTTON'},
        {key:'SKULL', value:'SKULL'},
        {key:'ANVIL', value:'ANVIL'},
        {key:'TRAPPED_CHEST', value:'TRAPPED_CHEST'},
        {key:'GOLD_PLATE', value:'GOLD_PLATE'},
        {key:'IRON_PLATE', value:'IRON_PLATE'},
        {key:'REDSTONE_COMPARATOR_OFF', value:'REDSTONE_COMPARATOR_OFF'},
        {key:'REDSTONE_COMPARATOR_ON', value:'REDSTONE_COMPARATOR_ON'},
        {key:'DAYLIGHT_DETECTOR', value:'DAYLIGHT_DETECTOR'},
        {key:'REDSTONE_BLOCK', value:'REDSTONE_BLOCK'},
        {key:'QUARTZ_ORE', value:'QUARTZ_ORE'},
        {key:'HOPPER', value:'HOPPER'},
        {key:'QUARTZ_BLOCK', value:'QUARTZ_BLOCK'},
        {key:'QUARTZ_STAIRS', value:'QUARTZ_STAIRS'},
        {key:'ACTIVATOR_RAIL', value:'ACTIVATOR_RAIL'},
        {key:'DROPPER', value:'DROPPER'},
        {key:'STAINED_CLAY', value:'STAINED_CLAY'},
        {key:'STAINED_GLASS_PANE', value:'STAINED_GLASS_PANE'},
        {key:'LEAVES_2', value:'LEAVES_2'},
        {key:'LOG_2', value:'LOG_2'},
        {key:'ACACIA_STAIRS', value:'ACACIA_STAIRS'},
        {key:'DARK_OAK_STAIRS', value:'DARK_OAK_STAIRS'},
        {key:'SLIME_BLOCK', value:'SLIME_BLOCK'},
        {key:'BARRIER', value:'BARRIER'},
        {key:'IRON_TRAPDOOR', value:'IRON_TRAPDOOR'},
        {key:'PRISMARINE', value:'PRISMARINE'},
        {key:'SEA_LANTERN', value:'SEA_LANTERN'},
        {key:'HAY_BLOCK', value:'HAY_BLOCK'},
        {key:'CARPET', value:'CARPET'},
        {key:'HARD_CLAY', value:'HARD_CLAY'},
        {key:'COAL_BLOCK', value:'COAL_BLOCK'},
        {key:'PACKED_ICE', value:'PACKED_ICE'},
        {key:'DOUBLE_PLANT', value:'DOUBLE_PLANT'},
        {key:'STANDING_BANNER', value:'STANDING_BANNER'},
        {key:'WALL_BANNER', value:'WALL_BANNER'},
        {key:'DAYLIGHT_DETECTOR_INVERTED', value:'DAYLIGHT_DETECTOR_INVERTED'},
        {key:'RED_SANDSTONE', value:'RED_SANDSTONE'},
        {key:'RED_SANDSTONE_STAIRS', value:'RED_SANDSTONE_STAIRS'},
        {key:'DOUBLE_STONE_SLAB2', value:'DOUBLE_STONE_SLAB2'},
        {key:'STONE_SLAB2', value:'STONE_SLAB2'},
        {key:'SPRUCE_FENCE_GATE', value:'SPRUCE_FENCE_GATE'},
        {key:'BIRCH_FENCE_GATE', value:'BIRCH_FENCE_GATE'},
        {key:'JUNGLE_FENCE_GATE', value:'JUNGLE_FENCE_GATE'},
        {key:'DARK_OAK_FENCE_GATE', value:'DARK_OAK_FENCE_GATE'},
        {key:'ACACIA_FENCE_GATE', value:'ACACIA_FENCE_GATE'},
        {key:'SPRUCE_FENCE', value:'SPRUCE_FENCE'},
        {key:'BIRCH_FENCE', value:'BIRCH_FENCE'},
        {key:'JUNGLE_FENCE', value:'JUNGLE_FENCE'},
        {key:'DARK_OAK_FENCE', value:'DARK_OAK_FENCE'},
        {key:'ACACIA_FENCE', value:'ACACIA_FENCE'},
        {key:'SPRUCE_DOOR', value:'SPRUCE_DOOR'},
        {key:'BIRCH_DOOR', value:'BIRCH_DOOR'},
        {key:'JUNGLE_DOOR', value:'JUNGLE_DOOR'},
        {key:'ACACIA_DOOR', value:'ACACIA_DOOR'},
        {key:'DARK_OAK_DOOR', value:'DARK_OAK_DOOR'},
        {key:'IRON_SPADE', value:'IRON_SPADE'},
        {key:'IRON_PICKAXE', value:'IRON_PICKAXE'},
        {key:'IRON_AXE', value:'IRON_AXE'},
        {key:'FLINT_AND_STEEL', value:'FLINT_AND_STEEL'},
        {key:'APPLE', value:'APPLE'},
        {key:'BOW', value:'BOW'},
        {key:'ARROW', value:'ARROW'},
        {key:'COAL', value:'COAL'},
        {key:'DIAMOND', value:'DIAMOND'},
        {key:'IRON_INGOT', value:'IRON_INGOT'},
        {key:'GOLD_INGOT', value:'GOLD_INGOT'},
        {key:'IRON_SWORD', value:'IRON_SWORD'},
        {key:'WOOD_SWORD', value:'WOOD_SWORD'},
        {key:'WOOD_SPADE', value:'WOOD_SPADE'},
        {key:'WOOD_PICKAXE', value:'WOOD_PICKAXE'},
        {key:'WOOD_AXE', value:'WOOD_AXE'},
        {key:'STONE_SWORD', value:'STONE_SWORD'},
        {key:'STONE_SPADE', value:'STONE_SPADE'},
        {key:'STONE_PICKAXE', value:'STONE_PICKAXE'},
        {key:'STONE_AXE', value:'STONE_AXE'},
        {key:'DIAMOND_SWORD', value:'DIAMOND_SWORD'},
        {key:'DIAMOND_SPADE', value:'DIAMOND_SPADE'},
        {key:'DIAMOND_PICKAXE', value:'DIAMOND_PICKAXE'},
        {key:'DIAMOND_AXE', value:'DIAMOND_AXE'},
        {key:'STICK', value:'STICK'},
        {key:'BOWL', value:'BOWL'},
        {key:'MUSHROOM_SOUP', value:'MUSHROOM_SOUP'},
        {key:'GOLD_SWORD', value:'GOLD_SWORD'},
        {key:'GOLD_SPADE', value:'GOLD_SPADE'},
        {key:'GOLD_PICKAXE', value:'GOLD_PICKAXE'},
        {key:'GOLD_AXE', value:'GOLD_AXE'},
        {key:'STRING', value:'STRING'},
        {key:'FEATHER', value:'FEATHER'},
        {key:'SULPHUR', value:'SULPHUR'},
        {key:'WOOD_HOE', value:'WOOD_HOE'},
        {key:'STONE_HOE', value:'STONE_HOE'},
        {key:'IRON_HOE', value:'IRON_HOE'},
        {key:'DIAMOND_HOE', value:'DIAMOND_HOE'},
        {key:'GOLD_HOE', value:'GOLD_HOE'},
        {key:'SEEDS', value:'SEEDS'},
        {key:'WHEAT', value:'WHEAT'},
        {key:'BREAD', value:'BREAD'},
        {key:'LEATHER_HELMET', value:'LEATHER_HELMET'},
        {key:'LEATHER_CHESTPLATE', value:'LEATHER_CHESTPLATE'},
        {key:'LEATHER_LEGGINGS', value:'LEATHER_LEGGINGS'},
        {key:'LEATHER_BOOTS', value:'LEATHER_BOOTS'},
        {key:'CHAINMAIL_HELMET', value:'CHAINMAIL_HELMET'},
        {key:'CHAINMAIL_CHESTPLATE', value:'CHAINMAIL_CHESTPLATE'},
        {key:'CHAINMAIL_LEGGINGS', value:'CHAINMAIL_LEGGINGS'},
        {key:'CHAINMAIL_BOOTS', value:'CHAINMAIL_BOOTS'},
        {key:'IRON_HELMET', value:'IRON_HELMET'},
        {key:'IRON_CHESTPLATE', value:'IRON_CHESTPLATE'},
        {key:'IRON_LEGGINGS', value:'IRON_LEGGINGS'},
        {key:'IRON_BOOTS', value:'IRON_BOOTS'},
        {key:'DIAMOND_HELMET', value:'DIAMOND_HELMET'},
        {key:'DIAMOND_CHESTPLATE', value:'DIAMOND_CHESTPLATE'},
        {key:'DIAMOND_LEGGINGS', value:'DIAMOND_LEGGINGS'},
        {key:'DIAMOND_BOOTS', value:'DIAMOND_BOOTS'},
        {key:'GOLD_HELMET', value:'GOLD_HELMET'},
        {key:'GOLD_CHESTPLATE', value:'GOLD_CHESTPLATE'},
        {key:'GOLD_LEGGINGS', value:'GOLD_LEGGINGS'},
        {key:'GOLD_BOOTS', value:'GOLD_BOOTS'},
        {key:'FLINT', value:'FLINT'},
        {key:'PORK', value:'PORK'},
        {key:'GRILLED_PORK', value:'GRILLED_PORK'},
        {key:'PAINTING', value:'PAINTING'},
        {key:'GOLDEN_APPLE', value:'GOLDEN_APPLE'},
        {key:'SIGN', value:'SIGN'},
        {key:'WOOD_DOOR', value:'WOOD_DOOR'},
        {key:'BUCKET', value:'BUCKET'},
        {key:'WATER_BUCKET', value:'WATER_BUCKET'},
        {key:'LAVA_BUCKET', value:'LAVA_BUCKET'},
        {key:'MINECART', value:'MINECART'},
        {key:'SADDLE', value:'SADDLE'},
        {key:'IRON_DOOR', value:'IRON_DOOR'},
        {key:'REDSTONE', value:'REDSTONE'},
        {key:'SNOW_BALL', value:'SNOW_BALL'},
        {key:'BOAT', value:'BOAT'},
        {key:'LEATHER', value:'LEATHER'},
        {key:'MILK_BUCKET', value:'MILK_BUCKET'},
        {key:'CLAY_BRICK', value:'CLAY_BRICK'},
        {key:'CLAY_BALL', value:'CLAY_BALL'},
        {key:'SUGAR_CANE', value:'SUGAR_CANE'},
        {key:'PAPER', value:'PAPER'},
        {key:'BOOK', value:'BOOK'},
        {key:'SLIME_BALL', value:'SLIME_BALL'},
        {key:'STORAGE_MINECART', value:'STORAGE_MINECART'},
        {key:'POWERED_MINECART', value:'POWERED_MINECART'},
        {key:'EGG', value:'EGG'},
        {key:'COMPASS', value:'COMPASS'},
        {key:'FISHING_ROD', value:'FISHING_ROD'},
        {key:'WATCH', value:'WATCH'},
        {key:'GLOWSTONE_DUST', value:'GLOWSTONE_DUST'},
        {key:'RAW_FISH', value:'RAW_FISH'},
        {key:'COOKED_FISH', value:'COOKED_FISH'},
        {key:'INK_SACK', value:'INK_SACK'},
        {key:'BONE', value:'BONE'},
        {key:'SUGAR', value:'SUGAR'},
        {key:'CAKE', value:'CAKE'},
        {key:'BED', value:'BED'},
        {key:'DIODE', value:'DIODE'},
        {key:'COOKIE', value:'COOKIE'},
        {key:'MAP', value:'MAP'},
        {key:'SHEARS', value:'SHEARS'},
        {key:'MELON', value:'MELON'},
        {key:'PUMPKIN_SEEDS', value:'PUMPKIN_SEEDS'},
        {key:'MELON_SEEDS', value:'MELON_SEEDS'},
        {key:'RAW_BEEF', value:'RAW_BEEF'},
        {key:'COOKED_BEEF', value:'COOKED_BEEF'},
        {key:'RAW_CHICKEN', value:'RAW_CHICKEN'},
        {key:'COOKED_CHICKEN', value:'COOKED_CHICKEN'},
        {key:'ROTTEN_FLESH', value:'ROTTEN_FLESH'},
        {key:'ENDER_PEARL', value:'ENDER_PEARL'},
        {key:'BLAZE_ROD', value:'BLAZE_ROD'},
        {key:'GHAST_TEAR', value:'GHAST_TEAR'},
        {key:'GOLD_NUGGET', value:'GOLD_NUGGET'},
        {key:'NETHER_STALK', value:'NETHER_STALK'},
        {key:'POTION', value:'POTION'},
        {key:'GLASS_BOTTLE', value:'GLASS_BOTTLE'},
        {key:'SPIDER_EYE', value:'SPIDER_EYE'},
        {key:'FERMENTED_SPIDER_EYE', value:'FERMENTED_SPIDER_EYE'},
        {key:'BLAZE_POWDER', value:'BLAZE_POWDER'},
        {key:'MAGMA_CREAM', value:'MAGMA_CREAM'},
        {key:'BREWING_STAND_ITEM', value:'BREWING_STAND_ITEM'},
        {key:'CAULDRON_ITEM', value:'CAULDRON_ITEM'},
        {key:'EYE_OF_ENDER', value:'EYE_OF_ENDER'},
        {key:'SPECKLED_MELON', value:'SPECKLED_MELON'},
        {key:'MONSTER_EGG', value:'MONSTER_EGG'},
        {key:'EXP_BOTTLE', value:'EXP_BOTTLE'},
        {key:'FIREBALL', value:'FIREBALL'},
        {key:'BOOK_AND_QUILL', value:'BOOK_AND_QUILL'},
        {key:'WRITTEN_BOOK', value:'WRITTEN_BOOK'},
        {key:'EMERALD', value:'EMERALD'},
        {key:'ITEM_FRAME', value:'ITEM_FRAME'},
        {key:'FLOWER_POT_ITEM', value:'FLOWER_POT_ITEM'},
        {key:'CARROT_ITEM', value:'CARROT_ITEM'},
        {key:'POTATO_ITEM', value:'POTATO_ITEM'},
        {key:'BAKED_POTATO', value:'BAKED_POTATO'},
        {key:'POISONOUS_POTATO', value:'POISONOUS_POTATO'},
        {key:'EMPTY_MAP', value:'EMPTY_MAP'},
        {key:'GOLDEN_CARROT', value:'GOLDEN_CARROT'},
        {key:'SKULL_ITEM', value:'SKULL_ITEM'},
        {key:'CARROT_STICK', value:'CARROT_STICK'},
        {key:'NETHER_STAR', value:'NETHER_STAR'},
        {key:'PUMPKIN_PIE', value:'PUMPKIN_PIE'},
        {key:'FIREWORK', value:'FIREWORK'},
        {key:'FIREWORK_CHARGE', value:'FIREWORK_CHARGE'},
        {key:'ENCHANTED_BOOK', value:'ENCHANTED_BOOK'},
        {key:'REDSTONE_COMPARATOR', value:'REDSTONE_COMPARATOR'},
        {key:'NETHER_BRICK_ITEM', value:'NETHER_BRICK_ITEM'},
        {key:'QUARTZ', value:'QUARTZ'},
        {key:'EXPLOSIVE_MINECART', value:'EXPLOSIVE_MINECART'},
        {key:'HOPPER_MINECART', value:'HOPPER_MINECART'},
        {key:'PRISMARINE_SHARD', value:'PRISMARINE_SHARD'},
        {key:'PRISMARINE_CRYSTALS', value:'PRISMARINE_CRYSTALS'},
        {key:'RABBIT', value:'RABBIT'},
        {key:'COOKED_RABBIT', value:'COOKED_RABBIT'},
        {key:'RABBIT_STEW', value:'RABBIT_STEW'},
        {key:'RABBIT_FOOT', value:'RABBIT_FOOT'},
        {key:'RABBIT_HIDE', value:'RABBIT_HIDE'},
        {key:'ARMOR_STAND', value:'ARMOR_STAND'},
        {key:'IRON_BARDING', value:'IRON_BARDING'},
        {key:'GOLD_BARDING', value:'GOLD_BARDING'},
        {key:'DIAMOND_BARDING', value:'DIAMOND_BARDING'},
        {key:'LEASH', value:'LEASH'},
        {key:'NAME_TAG', value:'NAME_TAG'},
        {key:'COMMAND_MINECART', value:'COMMAND_MINECART'},
        {key:'MUTTON', value:'MUTTON'},
        {key:'COOKED_MUTTON', value:'COOKED_MUTTON'},
        {key:'BANNER', value:'BANNER'},
        {key:'SPRUCE_DOOR_ITEM', value:'SPRUCE_DOOR_ITEM'},
        {key:'BIRCH_DOOR_ITEM', value:'BIRCH_DOOR_ITEM'},
        {key:'JUNGLE_DOOR_ITEM', value:'JUNGLE_DOOR_ITEM'},
        {key:'ACACIA_DOOR_ITEM', value:'ACACIA_DOOR_ITEM'},
        {key:'DARK_OAK_DOOR_ITEM', value:'DARK_OAK_DOOR_ITEM'},
        {key:'GOLD_RECORD', value:'GOLD_RECORD'},
        {key:'GREEN_RECORD', value:'GREEN_RECORD'},
        {key:'RECORD_3', value:'RECORD_3'},
        {key:'RECORD_4', value:'RECORD_4'},
        {key:'RECORD_5', value:'RECORD_5'},
        {key:'RECORD_6', value:'RECORD_6'},
        {key:'RECORD_7', value:'RECORD_7'},
        {key:'RECORD_8', value:'RECORD_8'},
        {key:'RECORD_9', value:'RECORD_9'},
        {key:'RECORD_10', value:'RECORD_10'},
        {key:'RECORD_11', value:'RECORD_11'},
        {key:'RECORD_12', value:'RECORD_12'},
        {key:'SHEEP', value:'SHEEP'},
      ].sort((a,b) => {
        const na = a.key.toUpperCase();
        const nb = b.key.toUpperCase();
        return na < nb ? -1 : na > nb ? 1 : 0;
      });
  }
}
