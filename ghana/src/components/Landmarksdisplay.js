import { useState } from "react"
import "./landmarks.css"



export const Landmarksdisplay = () => {
    const [landmarks, setLandmarks] = useState([
        {
          id:1,
          name: 'Wa Naa Palace',
          location: 'Wa, Ghana',
          details:'Traditionally occupied by chiefs of the royal Wa family, this 19th-century palace has remained unoccupied since the death of the last chief, Naa Morori Bondiri in 1998. Restoration work on the various compounds within the palace began in early 2009, with hopes that a new Wa-na can be found to take up residence once again.',
          image: 'https://i0.wp.com/jetsanza.com/js-content/uploads/2019/10/Wa-Naas-Palace.jpg?fit=800%2C453&ssl=1'
      },
      {
          id:2,
          name: 'Lake Bosomtwe',
          location: 'Kumasi, Ghana',
          details:'Lake Bosomtwe is the only natural lake in Ghana,moreover the lake is surrounded by mountains and is inhabited by a myriad of fish species. Furthermore, the scene is very serene and tranquil.',
          image: 'https://visitghana.com/wp-content/uploads/2019/02/3907_Lake-Bosomtwe-Abono.jpg'
      },
      {
          id:3,
          name: 'Kwame Nkrumah Memorial Park & Mausoleum',
          location: 'Accra, Ghana',
          details:'Dr.Kwame Nkrumah is remembered as quintessential leader, he was the catalyst that gave Ghana its independence from colonial rule (Britain). The Kwame Nkrumah Memorial Park and Mausoleum was dedicated in 1992 to Dr Kwame Nkrumah to commemorate his life and work after his death.',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Front_View_of_Kwame_Nkrumah%27s_Mausoleum_and_Memorial_in_Accra_Ghana%2C_May_2008.jpg/1200px-Front_View_of_Kwame_Nkrumah%27s_Mausoleum_and_Memorial_in_Accra_Ghana%2C_May_2008.jpg'
      },
      
      {
          id:4,
          name: 'Lake Volta',
          location: 'Akosombo, Ghana',
          details:' Lake Volta is the largest artificially made lake in the world, created by the building of the Akosombo Dam in 1965. It covers an astonishing 3.6% of Ghanas total land area. Although the lake primarily serves a practical purpose, to create electricity for nearly all of the countrys needs and to irrigate farmland, it also acts as a draw for tourists. A boat operates between Akosombo and Yeji throughout the day. Fishing trips and water sports are also to hand around the shoreline.',
          image: 'https://media.istockphoto.com/photos/idyllic-lake-volta-in-west-africa-ghana-picture-id1382908974?k=20&m=1382908974&s=612x612&w=0&h=Agxc17Ql-y_AKglngk1UCD7lslk7Rsv-GHIDC8QXAjY='
      },
      {
          id:5,
          name: 'Independence Arch',
          location: 'Accra, Ghana',
          details:'The Independence Arch is one of the most breathtaking and unmissable landmarks. At the summit of the arch, a large black star is mounted. It is located on the north side of Independence Square, the site of many official celebrations and parades, and has become an iconic city symbol.',
          image: 'https://media.istockphoto.com/photos/independence-arch-accra-ghana-picture-id148476508?k=20&m=148476508&s=612x612&w=0&h=x2GpFew2dGlWF20AyLXA54yjrIatTmhJrwnVC1-QuT4='
      },
      {
          id:6,
          name: 'Kintampo Falls',
          location: 'Kintampo Township, Ghana',
          details:'Kintampo Falls is a waterfall that has enamored tourists an innumerable amount of times. The falls themselves are in the shape of stairs, moreover, the water disappears subsequently resurfacing about 200 meters away from the original location.',
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/3b/e5/7f/kintampo-falls.jpg?w=1200&h=-1&s=1'
      },
      {
          id:7,
          name: 'Larabanga Mosque',
          location: 'Larabanga, Ghana',
          details:'The Larabanga Mosque is the oldest mosque in Ghana. Built in 1421, this architectural beauty is often referred to as the "the Mecca of West Africa".',
          image: 'https://www.wmf.org/sites/default/files/styles/project_gallery_full_size/public/projects/gallery/GHA_Larabanga_JPEG_img-02.jpg?itok=Z9oh9eFN'
      },
      {
          id:8,
          name: 'Cape Coast Castle',
          location: 'Cape Coast, Ghana',
          details:'Cape Coasts castle is located in a historic fortification that dates back to the 17th century. The first fortress on the site was built by the Swedish Africa Company, although this was soon extensively rebuilt by Ghanas British colonial rulers. Converted into a museum during the 1950s, following Ghanaian independence, the current collections cover archaeology, ethnography, architectural history, and photography. A gift shop and bookshop are available and complete the main attractions.',
          image: 'https://www.blackpast.org/wp-content/uploads/prodimages/files/blackpast_images/Cape_Coast_Castle_Ghana_May_19_2019_Photo_by_Strange_Acid__CC_BY-SA_4.0.jpg'
      }
    ]
    
      )
  return (
    <div>Landmarksdisplay</div>
  )
}
