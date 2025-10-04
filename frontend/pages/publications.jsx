import {
  Box,
  Heading,
  OrderedList,
  ListItem,
  Text,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const Publications = () => {
  const publications = [
    "Ngaba, Mbezele Junior Yannick, Abubakari Said Mgelwa, Muhammed Mustapha Ibrahim, Bin Hu, Heinz Rennenberg. Biochar amendments mitigate soil greenhouse gas emissions by shifted soil properties, enzyme activities, and nitrogen cycling processes. Carbon Research (In Press). (2025)",
    "Noufeu Noufeu, Tchouli, Tinghong Ming, Xiaoqun Zeng, Jiajie Xu, Ngaba, Mbezele Junior Yannick, François Tchoumbougnang, Achille Njomoue Pandong, Salle Mpondo, Tchoulabi Keyeya, and Moussa Gouife. Effect of Nutrient Supplementation on the Biochemical Composition and Microbial Safety of Open-Pond Spirulina Cultivated in Cameroon. Foods. (2025); 14(17):3009.",
    "Ngaba, Mbezele Junior Yannick, Olive Mekontchou Yemele, Bin Hu, Heinz Rennenberg. Biochar application as a green clean-up method: Bibliometric analysis of current trends and future. Biochar (2025): 7(1), 1-26.",
    "Ngaba, Mbezele Junior Yannick. Heinz Rennenberg, and Bin Hu. Insights Into the Efficiency and Health Impacts of Emerging Microplastic Bioremediation Approaches. Global Change Biology 31.5 (2025): e70226.",
    "Hu, B., Jarosch, A. M., Grote, R., Ngaba, Mbezele Junior Yannick, Schnitzler, J. P., Kreuzwieser, J., & Rennenberg, H. Ontogenetic, diurnal, and environmental impacts on VOC emission from sugarcane. Environment International (2025): 109502.",
    "Yemele, O. M., Zhao, Z., Ngaba, Mbezele Junior Yannick, Ymele, E., Xia, L., Xiaorou, W., & Opoku, P. A. A global systematic review and meta-analysis of innovative technologies for 1, 2, 4-trichlorobenzene remediation in soil and water. Environmental Geochemistry and Health (2025): 47(6), 1-21. ",
    'Ngaba, Mbezele Junior Yannick, Bin Hu, and Heinz Rennenberg. "Biochar amendment affects the microbial genetic profile of the soil, its community structure and phospholipid fatty acid contents." Science of The Total Environment 955 (2024): 176748.',
    "Ngaba, Mbezele Junior Yannick, Uwiragiye, Y., Hu, B., Zhou, J., Dannenmann, M., Calanca, P.,... & Rennenberg, H. (2024). Effects of environmental changes on soil respiration in arid, cold, temperate, and tropical zones. Science of the Total Environment, 952, (2024): 175943. ",
    'Mgelwa, Abubakari Said, Ngaba, Mbezele Junior Yannick, Bin Hu, Geshere Abdisa Gurmesa, Agnes Godfrey Mwakaje, Mateg Pascale Bernadette Nyemeck, Feifei Zhu et al. "Meta-analysis of 21st century studies shows that deforestation induces profound changes in soil characteristics, particularly soil organic carbon accumulation." Forest Ecosystems (2024): 100257. ',
    'Nkono, Julien, Dongmo Nguefack Ernest-Lavenir, and Ngaba, Mbezele Junior Yannick. "Density, abundance and spatial distribution niche overlap of large and medium-sized mammal populations in the Lomako-Yokokala Faunal Reserve, Congo." International Journal of Biodiversity and Conservation (2024).  ',
    'Ngaba, Mbezele Junior Yannick, Yves Uwiragiye, Roland Bol, Wim de Vries, Jinshi Jian, and Jianbin Zhou. "Global cross-biome patterns of soil respiration responses to individual and interactive effects of nitrogen addition, altered precipitation, and warming." Science of the Total Environment 858 (2023): 159808. ',
    'Ngaba, Mbezele Junior Yannick, Abubakari Said Mgelwa, Geshere Abdisa Gurmesa, Yves Uwiragiye, Feifei Zhu, Qingyan Qiu, Yunting Fang, Bin Hu, and Heinz Rennenberg. "Meta-analysis unveils differential effects of agroforestry on soil properties in different zonobiomes." Plant and Soil (2023): 1-19. ',
    'Ngaba, Mbezele Junior Yannick, Yves Uwiragiye, and Jianbin Zhou. "Patterns and controlling factors of soil carbon sequestration in nitrogen-limited and-rich forests in China—a meta-analysis." PeerJ 11 (2023): e14694. ',
    'YEMELE, Olive M., Ngaba, Mbezele Junior Yannick, and Gordon N. Ajonina. "Stakeholder perceptions of wetlands management effectiveness in Cameroon." Journal of Ecology and The Natural Environment (2023). ',
    'Uwiragiye, Yves, Ngaba, Mbezele Junior Yannick, Mingxia Yang, Ahmed S. Elrys, Zhujun Chen, and Jianbin Zhou. "Spatially Explicit Soil Acidification under Optimized Fertilizer Use in Sub-Saharan Africa." Agronomy 13, no. 3 (2023): 632. ',
    'Uwiragiye, Yves, Qahtan Abdul Wahid Khalaf, Hayssam M. Ali, Ngaba, Mbezele Junior Yannick, Mingxia Yang, Ahmed S. Elrys, Zhujun Chen, and Jianbin Zhou. "Spatio-Temporal Variations in Soil pH and Aluminum Toxicity in Sub-Saharan African Croplands (1980–2050)." Remote Sensing 15, no. 5 (2023): 1338. ',
    'Ngaba, Mbezele Junior Yannick, Yves Uwiragiye, Roland Bol, Wim de Vries, and Jianbin Zhou. "Low-level nitrogen and short-term addition increase soil carbon sequestration in Chinese forest ecosystems." Catena 215 (2022): 106333. ',
    'Ngaba, Mbezele Junior Yannick, Yves Uwiragiye, Hongzhi Miao, Zhiqin Li, Paulo Pereira, and Jianbin Zhou. "Ecological restoration stimulates environmental outcomes but exacerbates water shortage in the Loess Plateau." PeerJ 10 (2022): e13658',
    'Uwiragiye, Yves, Ngaba, Mbezele Junior Yannick, Mengzhen Zhao, Ahmed S. Elrys, Gerard BM Heuvelink, and Jianbin Zhou. "Modelling and mapping soil nutrient depletion in humid highlands of East Africa using ensemble machine learning: A case study from Rwanda." Catena 217 (2022): 106499. ',
    'Ngaba, Mbezele Junior Yannick, Roland Bol, and Ya-Lin Hu. "Stable isotopic signatures of carbon and nitrogen in soil aggregates following the conversion of natural forests to managed plantations in eastern China." Plant and soil 459 (2021): 371-385. ',
    'Ngomi, C. S. T., A. A. A. Fadikpe, Ngaba, Mbezele Junior Yannick, Q. P. Chen, M. F. M. Nfonbeu, and J. Z. Yang. "Impact of adoption of agricultural extension services on farm households food security in Cameroon." In IOP Conference Series: Earth and Environmental Science, vol. 601, no. 1, p. 012001. IOP Publishing, 2020',
    'Mgelwa, Abubakari Said, Ya-Lin Hu, and Ngaba, Mbezele Junior Yannick. "Patterns of nitrogen concentrations and their controls in two southern China urban river ecosystems." Global Ecology and Conservation 23 (2020): e01112. ',
    'Ngaba, Mbezele Junior Yannick, Ya-Lin Hu, Roland Bol, Xiang-Qing Ma, Shao-Fei Jin, and Abubakari Said Mgelwa. "Effects of land use change from natural forest to plantation on C, N and natural abundance of 13C and 15N along a climate gradient in eastern China." Scientific Reports 9, no. 1 (2019): 16516. ',
    'Mgelwa, Abubakari Said, Ya-Lin Hu, Jin-Fu Liu, Qingyan Qiu, Zheng Liu, and Ngaba, Mbezele Junior Yannick. "Differential patterns of nitrogen and δ15N in soil and foliar along two urbanized rivers in a subtropical coastal city of southern China." Environmental Pollution 244 (2019): 907-914.',
    //  continue adding all publications here in order
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedPublications = showAll
    ? publications
    : publications.slice(0, 5);

  return (
    <Box p={8} maxW="1000px" mx="auto">
      <Heading size="lg" mb={6} textAlign="center" color="teal.600">
        Publications
      </Heading>

      {/* Chronological ordered list */}
      <OrderedList spacing={4}>
        {displayedPublications.map((pub, index) => (
          <ListItem key={index}>
            <Text fontSize="md" lineHeight="tall" textAlign="justify">
              {pub}
            </Text>
          </ListItem>
        ))}
      </OrderedList>

      {publications.length > 5 && (
        <Box textAlign="center" mt={4}>
          <Button
            size="sm"
            colorScheme="teal"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Publications;
