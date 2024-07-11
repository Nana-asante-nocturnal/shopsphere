import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// Mock data for categories and products
const categories = [
  {
    id: '1',
    name: 'Electronics',
    image:
      'https://img.freepik.com/premium-photo/free-photo-laptop-electronic-devices-hardware-devices_1124573-13199.jpg?w=740',
  },
  {
    id: '2',
    name: 'Books',
    image:
      'https://img.freepik.com/premium-photo/stack-various-books-table_705862-687.jpg?w=740',
  },
  {
    id: '3',
    name: 'Clothing',
    image:
      'https://w7.pngwing.com/pngs/760/991/png-transparent-folded-shirts-illustration-clothing-computer-file-clean-clothes-textile-baby-clothes-woolen-thumbnail.png',
  },
  {
    id: '4',
    name: 'Home & Kitchen',
    image:
      'https://w7.pngwing.com/pngs/1017/473/png-transparent-assorted-brand-of-home-appliance-home-appliance-washing-machines-small-appliance-refrigerator-kitchen-refrigerator-electronics-household-clothes-dryer-thumbnail.png',
  },
  {
    id: '5',
    name: 'Sports',
    image:
      'https://w7.pngwing.com/pngs/265/720/png-transparent-uefa-euro-2016-sport-casino-game-player-miscellaneous-game-team-thumbnail.png',
  },
  {
    id: '6',
    name: 'Beauty & Personal Care',
    image:
      'https://img.freepik.com/premium-photo/girl-summer-protecting-herself-with-sunscreen-orange-background-with-decorative-elements-4_848918-1435.jpg?w=740',
  },
  {
    id: '7',
    name: 'Toys',
    image:
      'https://img.freepik.com/free-photo/flat-lay-composition-toys_23-2148144841.jpg?t=st=1718238718~exp=1718242318~hmac=0e60246719a45e13cdd0cb860082fc52ea847363ea4b6bfcc4efaa211c387b63&w=740',
  },
  {
    id: '8',
    name: 'Automotive',
    image:
      'https://img.freepik.com/free-photo/close-up-metallic-car-wheel_23-2151113194.jpg?t=st=1718239468~exp=1718243068~hmac=368c9d853868231311e08373b444636059722c8d4dad769e7e8cb9111717f892&w=740',
  },
  {
    id: '9',
    name: 'Music',
    image:
      'https://img.freepik.com/free-photo/cheerful-african-american-man-points-blank-space-has-good-mood-while-listens-lively-music-headphones-feels-upbeat-happy_273609-38687.jpg?t=st=1718239112~exp=1718242712~hmac=af305c4a4d3510e3a5884c8d54c9ccd080da7dfe1b4399553e9d26adf344a1b2&w=740',
  },
  {
    id: '10',
    name: 'Grocery',
    image:
      'https://img.freepik.com/free-photo/organic-foodstuff-bags_23-2148516758.jpg?t=st=1718239204~exp=1718242804~hmac=ac4d679f8457068f036c1b6e9b1170ee5e501a80d829582f9600e9b4f3287029&w=740',
  },
  {
    id: '11',
    name: 'Furniture',
    image:
      'https://img.freepik.com/premium-photo/cozy-chair-coffee-table-isolated-white-background_1223255-11741.jpg?w=740',
  },
  {
    id: '12',
    name: 'Jewelry',
    image:
      'https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg?t=st=1718272773~exp=1718276373~hmac=b1508d27a28818e05c9cb080415438b0eb30f490cbadc6597e214aa9598c5e4f&w=740',
  },
  {
    id: '13',
    name: 'Movies',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8P5uwVwfPAX9FnmiLtcFECf8l28lS9FN-g&s',
  },
  {
    id: '14',
    name: 'Health & Fitness',
    image:
      'https://img.freepik.com/free-photo/modern-gym-composition-with-sport-elements_23-2147913675.jpg?t=st=1718273111~exp=1718276711~hmac=75406aa41b2415dd8105781c9ff288dc1b6de369860ccbc69c87511cf09dc62c&w=740',
  },
  {
    id: '15',
    name: 'Pets',
    image:
      'https://img.freepik.com/free-photo/african-american-man-wearing-black-t-shirt-holding-dog_273609-22774.jpg?t=st=1718273329~exp=1718276929~hmac=6194b81e3763c1f4a9737dc64b6e12f97b8402bcf8cdb764bec4f8c519be340b&w=740',
  },
  {
    id: '16',
    name: 'Tools',
    image:
      'https://img.freepik.com/free-photo/frame-mechanical-tools_23-2148558015.jpg?t=st=1718273406~exp=1718277006~hmac=ae2e890aaa95e59cbb73288404a76c4cb4eb974dbb199b032466c634b9c4dcee&w=740',
  },
  {
    id: '17',
    name: 'Art & Crafts',
    image:
      'https://img.freepik.com/free-photo/copy-space-artist-tools-collection_23-2148575575.jpg?t=st=1718273609~exp=1718277209~hmac=3e49a0a67543729d111ce6144e5880552551d5106550633762d59ff73f72f578&w=740',
  },
  {
    id: '18',
    name: 'Garden & Outdoor',
    image:
      'https://img.freepik.com/premium-photo/empty-wooden-table-with-blurred-abstract-green-from-garden-morning-background-generated-by-ai_986584-55476.jpg?w=740',
  },
  {
    id: '19',
    name: 'Baby Products',
    image:
      'https://img.freepik.com/free-photo/adorable-little-baby-girl-yellow-outfit-crawls-floor-at-home_176420-19789.jpg?size=626&ext=jpg',
  },
  {
    id: '20',
    name: 'Industrial & Scientific',
    image:
      'https://img.freepik.com/free-photo/side-view-male-researcher-biotechnology-laboratory-with-plant_23-2148776134.jpg?t=st=1718273884~exp=1718277484~hmac=cc5f7f939057da00eca49b247bcd0ecbb92d27fde50c10c868a512cea08bc449&w=740',
  },
  {
    id: '21',
    name: 'Electricals',
    image:
      'https://img.freepik.com/premium-photo/bunch-wires-with-one-that-says-power_993265-55202.jpg?w=740',
  },
  {
    id: '22',
    name: 'Appliances',
    image:
      'https://img.freepik.com/free-vector/set-coffee-makers-realistic-style_23-2147602451.jpg?t=st=1718273986~exp=1718277586~hmac=823188c109a64d6ed82f4529ff971491bdf2b6a9941fe3e4f9d1f87492362a52&w=740',
  },
  {
    id: '23',
    name: 'Office Furniture',
    image:
      'https://img.freepik.com/premium-photo/cozy-chair-coffee-table-isolated-white-background_1223255-11741.jpg?w=740',
  },
  {
    id: '24',
    name: 'Fashion Accessories',
    image:
      'https://img.freepik.com/free-photo/travel-still-life-pack-top-view_23-2148837322.jpg?t=st=1718253854~exp=1718257454~hmac=b42e3290df21ddc4ca75a3b6954f294a0190f0fd54033719d42a0bf6f4cbd8c6&w=740',
  },
  {
    id: '25',
    name: 'Party Supplies',
    image:
      'https://img.freepik.com/premium-photo/ribbon-celebration-white-background-v-6-job-id-709205d97c2e410dbe4d21a3417f2865_1134901-55273.jpg?w=740',
  },
  {
    id: '26',
    name: 'Pet Supplies',
    image:
      'https://img.freepik.com/free-photo/cute-pet-collage-isolated_23-2150007408.jpg?t=st=1718255438~exp=1718259038~hmac=3fb7beadc371d27a22fee23a810e140ae9a2d4fb1b5fd1387ae7b8ab1adb0386&w=740',
  },
  {
    id: '27',
    name: 'Home Improvement',
    image:
      'https://img.freepik.com/free-photo/covid-concept-with-wooden-pieces_23-2148911545.jpg?t=st=1718255352~exp=1718258952~hmac=95895a85f38fa7063feef2d65b1d7aa63a842e99a9397bcc8e07e02526eda796&w=740',
  },
  {
    id: '28',
    name: 'Fitness Equipment',
    image:
      'https://img.freepik.com/free-photo/big-dumbbells-white_144627-24203.jpg?t=st=1718255211~exp=1718258811~hmac=4caf2d6352e5655d141dab602a84fd686877e22ed6fd76470634ce40be741a99&w=740',
  },
  {
    id: '29',
    name: 'School Supplies',
    image:
      'https://img.freepik.com/free-photo/top-view-back-school-concept_23-2148559645.jpg?t=st=1718255105~exp=1718258705~hmac=a404caae19d2d3d9d2e11ece92164c75d368847e285abf9951814335f73e2041&w=740',
  },
  {
    id: '30',
    name: 'Outdoor Clothing',
    image:
      'https://img.freepik.com/premium-photo/image-photo-new-2023-jpg-white-background-isolated-wallpaper-texture-photo-image-2024_873925-238021.jpg?w=740',
  },
  {
    id: '31',
    name: 'Home Decor',
    image:
      'https://img.freepik.com/premium-photo/3d-rendered-photos-harmonious-color-palette-inspired-by-nature-with-complementary-colors_1096167-71329.jpg?w=740',
  },
  {
    id: '32',
    name: 'Gaming Accessories',
    image:
      'https://img.freepik.com/premium-photo/computer-mouse-with-glowing-light-it_745528-15305.jpg?w=740',
  },
  {
    id: '33',
    name: 'Craft Supplies',
    image:
      'https://img.freepik.com/premium-photo/whistles-balloons-gifts-candles-decoration-old-wooden-background_104376-635.jpg?w=740',
  },
  {
    id: '34',
    name: 'Car Accessories',
    image:
      'https://img.freepik.com/free-vector/car-service-template_1284-14576.jpg?t=st=1718254380~exp=1718257980~hmac=d94ecdf3a52a48f8a688b629c8308f118464ccc79a529fcbe650ed6b72e3ac53&w=740',
  },
  {
    id: '35',
    name: 'Music Instruments',
    image:
      'https://img.freepik.com/premium-photo/stylized-musical-instruments_397139-17740.jpg?w=740',
  },
  {
    id: '36',
    name: 'Cookware',
    image:
      'https://img.freepik.com/premium-psd/pots-pans-transparent-background_679658-20015.jpg?w=740',
  },
  {
    id: '37',
    name: 'Electrical Tools',
    image:
      'https://img.freepik.com/premium-photo/close-up-shiny-metal-object-with-blue-light-generative-ai_955925-70854.jpg?w=740',
  },
  {
    id: '38',
    name: 'Art Supplies',
    image:
      'https://img.freepik.com/premium-photo/directly-shot-colored-pencils-containers-table_1048944-7384260.jpg?w=740',
  },
  {
    id: '39',
    name: 'Camping Gear',
    image:
      'https://img.freepik.com/premium-photo/car-trunk-open-travel-adventures-road-trips-camping-exploring_1020867-73621.jpg?w=740',
  },
  {
    id: '40',
    name: 'Bathroom Accessories',
    image:
      'https://img.freepik.com/premium-photo/soap-shampoo-bottles-cotton-towels-with-green-plant-white-table-inside-bathroom-background_479776-2215.jpg?w=740',
  },
];
const categoriess = [
  {
    id: '1',
    name: 'Gaming',
    image:
      'https://img.freepik.com/free-photo/man-playing-virtual-reality-game_23-2148815675.jpg?t=st=1718254821~exp=1718258421~hmac=9665b3f47fb19f0c326672e7bcae081c8a2bb1497f5b6666b0bde1882d234b98&w=740',
  },
  {
    id: '2',
    name: 'Photography',
    image:
      'https://img.freepik.com/free-photo/black-camera-white-background_1203-2112.jpg?size=626&ext=jpg',
  },
  {
    id: '3',
    name: 'Footwear',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23UdBEYlfg5s2rAUw2vvB2xBjDSDRgDO-Uw&s',
  },
  {
    id: '4',
    name: 'Smart Home',
    image:
      'https://img.freepik.com/premium-photo/woman-sits-couch-living-room_1095391-239.jpg?w=740',
  },
  {
    id: '5',
    name: 'Industrial Supplies',
    image:
      'https://img.freepik.com/premium-photo/construction-props_397139-3497.jpg?w=740',
  },
  {
    id: '6',
    name: 'Food & Beverages',
    image:
      'https://img.freepik.com/premium-photo/table-with-food-drinks_158863-33994.jpg?w=740',
  },
  {
    id: '7',
    name: 'Office Supplies',
    image:
      'https://img.freepik.com/premium-photo/back-school-student-concept_526992-1956.jpg?w=740',
  },
  {
    id: '8',
    name: 'Musical Instruments',
    image:
      'https://img.freepik.com/premium-photo/stylized-musical-instruments_397139-17740.jpg?w=740',
  },
  {
    id: '9',
    name: 'Travel Accessories',
    image:
      'https://img.freepik.com/free-photo/flat-lay-tourism-items-arrangement_23-2148909656.jpg?t=st=1718274782~exp=1718278382~hmac=28a7959a6564204f325e8dca3213c232b4c9397ef17d35691299b3a7dc64b2ce&w=740',
  },
  {
    id: '10',
    name: 'Cleaning Supplies',
    image:
      'https://img.freepik.com/premium-psd/cleaning-products-basin-with-blue-sponges_777174-61339.jpg?w=740',
  },
  {
    id: '11',
    name: 'Medical Supplies',
    image:
      'https://img.freepik.com/premium-photo/mask-with-pills-stethoscope-syringe-medical-supply-objects-isolated-blue-background-top-view-flat-lay-overhead-shot-virus-protection-concept_315337-5343.jpg?w=740',
  },
  {
    id: '12',
    name: 'Home Appliances',
    image:
      'https://img.freepik.com/free-vector/household-kitchen-set-coffee-machine-mixer-electric-kettle-crock-pot_1284-27361.jpg?t=st=1718275466~exp=1718279066~hmac=21f308646777c12081037faa0333ba8d566b0606b9b38fcb2ff2a2b36efd645f&w=740',
  },
  {
    id: '13',
    name: 'Stationery',
    image:
      'https://img.freepik.com/premium-photo/white-surface-school-supplies_23-2147655994.jpg?w=740',
  },
  {
    id: '14',
    name: 'Party Decorations',
    image:
      'https://img.freepik.com/free-photo/vinyl-records-bright-confetti_23-2147972550.jpg?t=st=1718275353~exp=1718278953~hmac=8cfda54571a275f9dfb16ca2d07cfdd43de370eb9c26fa49e6ae80e7e8160e10&w=740',
  },
  {
    id: '15',
    name: 'Pet Care',
    image:
      'https://img.freepik.com/premium-psd/black-woman-cuddling-her-dog_679658-32026.jpg?w=740',
  },
  {
    id: '16',
    name: 'Kitchen Appliances',
    image:
      'https://img.freepik.com/premium-photo/cooking-utensils-green-background_1054941-5607.jpg?w=740',
  },
  {
    id: '17',
    name: 'Fitness Accessories',
    image:
      'https://img.freepik.com/free-photo/top-view-gym-gloves-with-weights-apple_23-2148523321.jpg?t=st=1718275154~exp=1718278754~hmac=f8fa99f7bb64fb9c45590a2095c47bb562c1b9cc7bf0cde7b010a29266c55343&w=740',
  },
  {
    id: '18',
    name: 'School Bags',
    image:
      'https://img.freepik.com/free-photo/modern-furniture-wooden-office-table-desk-with-laptop-keyboard-mouse-top-view-home-office-working-space_100053-477.jpg?size=626&ext=jpg',
  },
  {
    id: '19',
    name: 'Outerwear',
    image:
      'https://img.freepik.com/premium-photo/snow-jackets-isolated-white-background_936711-4769.jpg?w=740',
  },
  {
    id: '20',
    name: 'Electrical Tools',
    image:
      'https://img.freepik.com/premium-photo/close-up-shiny-metal-object-with-blue-light-generative-ai_955925-70854.jpg?w=740',
  },
  {
    id: '21',
    name: 'Fashion Accessories',
    image:
      'https://img.freepik.com/free-photo/travel-still-life-pack-top-view_23-2148837322.jpg?t=st=1718253854~exp=1718257454~hmac=b42e3290df21ddc4ca75a3b6954f294a0190f0fd54033719d42a0bf6f4cbd8c6&w=740',
  },
  {
    id: '22',
    name: 'Party Supplies',
    image:
      'https://img.freepik.com/premium-photo/ribbon-celebration-white-background-v-6-job-id-709205d97c2e410dbe4d21a3417f2865_1134901-55273.jpg?w=740',
  },
  {
    id: '23',
    name: 'Pet Supplies',
    image:
      'https://img.freepik.com/free-photo/cute-pet-collage-isolated_23-2150007408.jpg?t=st=1718255438~exp=1718259038~hmac=3fb7beadc371d27a22fee23a810e140ae9a2d4fb1b5fd1387ae7b8ab1adb0386&w=740',
  },
  {
    id: '24',
    name: 'Home Improvement',
    image:
      'https://img.freepik.com/free-photo/covid-concept-with-wooden-pieces_23-2148911545.jpg?t=st=1718255352~exp=1718258952~hmac=95895a85f38fa7063feef2d65b1d7aa63a842e99a9397bcc8e07e02526eda796&w=740',
  },
  {
    id: '25',
    name: 'Fitness Equipment',
    image:
      'https://img.freepik.com/free-photo/big-dumbbells-white_144627-24203.jpg?t=st=1718255211~exp=1718258811~hmac=4caf2d6352e5655d141dab602a84fd686877e22ed6fd76470634ce40be741a99&w=740',
  },
  {
    id: '26',
    name: 'School Supplies',
    image:
      'https://img.freepik.com/free-photo/top-view-back-school-concept_23-2148559645.jpg?t=st=1718255105~exp=1718258705~hmac=a404caae19d2d3d9d2e11ece92164c75d368847e285abf9951814335f73e2041&w=740',
  },
  {
    id: '27',
    name: 'Outdoor Clothing',
    image:
      'https://img.freepik.com/premium-photo/image-photo-new-2023-jpg-white-background-isolated-wallpaper-texture-photo-image-2024_873925-238021.jpg?w=740',
  },
  {
    id: '28',
    name: 'Home Decor',
    image:
      'https://img.freepik.com/premium-photo/3d-rendered-photos-harmonious-color-palette-inspired-by-nature-with-complementary-colors_1096167-71329.jpg?w=740',
  },
  {
    id: '29',
    name: 'Gaming Accessories',
    image:
      'https://img.freepik.com/premium-photo/computer-mouse-with-glowing-light-it_745528-15305.jpg?w=740',
  },
  {
    id: '30',
    name: 'Craft Supplies',
    image:
      'https://img.freepik.com/premium-photo/whistles-balloons-gifts-candles-decoration-old-wooden-background_104376-635.jpg?w=740',
  },
  {
    id: '31',
    name: 'Car Accessories',
    image:
      'https://img.freepik.com/free-vector/car-service-template_1284-14576.jpg?t=st=1718254380~exp=1718257980~hmac=d94ecdf3a52a48f8a688b629c8308f118464ccc79a529fcbe650ed6b72e3ac53&w=740',
  },
  {
    id: '32',
    name: 'Music Instruments',
    image:
      'https://img.freepik.com/premium-photo/stylized-musical-instruments_397139-17740.jpg?w=740',
  },
  {
    id: '33',
    name: 'Cookware',
    image:
      'https://img.freepik.com/premium-psd/pots-pans-transparent-background_679658-20015.jpg?w=740',
  },
  {
    id: '34',
    name: 'Electrical Tools',
    image:
      'https://img.freepik.com/premium-photo/close-up-shiny-metal-object-with-blue-light-generative-ai_955925-70854.jpg?w=740',
  },
  {
    id: '35',
    name: 'Art Supplies',
    image:
      'https://img.freepik.com/premium-photo/directly-shot-colored-pencils-containers-table_1048944-7384260.jpg?w=740',
  },
  {
    id: '36',
    name: 'Camping Gear',
    image:
      'https://img.freepik.com/premium-photo/car-trunk-open-travel-adventures-road-trips-camping-exploring_1020867-73621.jpg?w=740',
  },
  {
    id: '37',
    name: 'Bathroom Accessories',
    image:
      'https://img.freepik.com/premium-photo/soap-shampoo-bottles-cotton-towels-with-green-plant-white-table-inside-bathroom-background_479776-2215.jpg?w=740',
  },
];
const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView alwaysBounceVertical={true}>
        {/* Header */}
        <View style={styles.header}>
          <FontAwesome5 name='bars' size={24} color='black' />
          <Image
            source={require('./assets/Shopsphere.png')}
            style={styles.logo}
          />
          <View style={styles.headerIcons}>
            <FontAwesome5
              name='location-arrow'
              size={24}
              color='black'
              style={styles.icon}
            />
            <FontAwesome5
              name='bell'
              size={24}
              color='black'
              style={styles.icon}
            />
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <FontAwesome5
            name='search'
            size={20}
            color='black'
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder='Search on shopshere'
          />
        </View>

        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}>
          {categories.map((category) => (
            <View key={category.id} style={styles.card}>
              <Image source={{ uri: category.image }} style={styles.image} />
              <Text style={styles.cardTitle}>{category.name}</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        {/* Featured Products */}
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}>
          {categories.map((category) => (
            <View key={category.id} style={styles.productCard}>
              <Image
                source={{ uri: category.image }}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>{category.name}</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Additional Categories */}
        <Text style={styles.sectionTitle}>Additional Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}>
          {categoriess.map((category) => (
            <View key={category.id} style={styles.card}>
              <Image source={{ uri: category.image }} style={styles.image} />
              <Text style={styles.cardTitle}>{category.name}</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Movers & Shakers */}
        <Text style={styles.sectionTitle}>Movers & Shakers</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}>
          {categories.map((category) => (
            <View key={category.id} style={styles.productCard}>
              <Image
                source={{ uri: category.image }}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>{category.name}</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Best Selling Products */}
        <Text style={styles.sectionTitle}>Best Selling Products</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}>
          {categoriess.map((category) => (
            <View key={category.id} style={styles.productCard}>
              <Image
                source={{ uri: category.image }}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>{category.name}</Text>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      {/* Footer with Navigation Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome5 name='home' size={24} color='black' />
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome5 name='search' size={24} color='black' />
          <Text style={styles.footerButtonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome5 name='shopping-cart' size={24} color='black' />
          <Text style={styles.footerButtonText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <FontAwesome5 name='user' size={24} color='black' />
          <Text style={styles.footerButtonText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginBottom: -20,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 35,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    borderRadius: 30,
    marginBottom: 2,
    marginHorizontal: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  horizontalScroll: {
    flexDirection: 'row',
    paddingLeft: 15,
  },
  card: {
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardTitle: {
    marginTop: 10,
    textAlign: 'center',
  },
  productCard: {
    marginRight: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 110,
  },
  productTitle: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#2fa866',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default App;
