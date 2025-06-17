document.addEventListener("DOMContentLoaded", function () {
            const achieveContainer = document.getElementById("achieve");
            const achieveTitle = document.getElementById("achieve-title");

            // BUTTONS FOR ACHIEVEMENTS
            const achievements = {

                //GEOMAPPING

                mapping: {
                    title: "Geomapping",
                    content: `
                <div class="list-achieve"   >
                    <div class="achieve-con">
                        <img src="../mapping-img/2025/20250113_TORIBIO.jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Mt. Banahaw de Tayabas</h2>
                            <p class="setting">January 2025 <br><br>Plotted Sampling Sites</p>
                            
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2025/20250310_ZoomIn_v3 (1).jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Forest Buffer Zone of Mt. Banahaw de Liliw and Nagcarlan</h2>
                            <p class="setting">March 2025 <br><br></p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2025/Abrencillo_Brgy. Lalo.jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Topographic Map of Brgy. Lalo, Tayabas City</h2>
                            <p class="setting">2025 <br><br>Highlighting areas covered by Mt. Banahaw San Cristobal Protected Landscape (MBSCPL)</p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2025/bms site (1).jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>BMS Sites in Mt. Banahaw de Tayabas, Tayabas City, Quezon</h2>
                            <p class="setting">2025 <br><br></p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2025/Dimailig_SS Map v3.jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Sampling Site Map of Order Chiroptera (Bats)</h2>
                            <p class="setting">2025 <br><br>Along with Mt. Banahaw San Cristobal Protected Landscape (Candelaria, Quezon)</p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2025/MDT (1).jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Mt. Banahaw de Tayabas Boundary Map</h2>
                            <p class="setting">2025 <br><br>Highlighting areas covered by MBSCPL</p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2025/MDT_Trail_v2.jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Mt. Banahaw de Tayabas</h2>
                            <p class="setting">January 2025 <br><br>Indicating the entry point from Brgy. Lalo, Tayabas City</p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2025/NagsinamoRev2 (1).jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Location Map of Residential and Public Places in Brgy. Nagsinamo, Lucban, Quezon</h2>
                            <p class="setting">2025 <br><br></p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2025/unisan,quezon_study area.jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Municipality of Unisan, Quezon</h2>
                            <p class="setting">2025 <br><br></p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2025/06052025_Manangan (1).jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Rice Field Areas of Brgy. Mayao Castillo, Lucena City</h2>
                            <p class="setting">2025 <br><br></p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/20240425_Domenic Empamano_MIGRBS (1).jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Minasawa Island Game Refuge and Bird Sanctuary</h2>
                            <p class="setting">April 2024 <br><br></p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/20240626_Ricmar Bagayan3 (1).jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Topographic Map Showing Bunga Falls and Kilangin Falls in Nagcarlan and Liliw, Laguna</h2>
                            <p class="setting">April 2024 <br><br></p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/20240717_Jasmine Faith Collado (1).jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Spatial Distribution Map of Anuran Species, Brgy. Pansol, Pila, Laguna</h2>
                            <p class="setting">July 2024 <br><br></p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/20240905_TDEnteng_Fld_Sep3 (1).jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Quezon Province Flood Occurence Map</h2>
                            <p class="setting">September 2024 <br><br>During the onset of TD Enteng</p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/20240924_Topographic Map MdT Spiders.jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Topographic Map of Lalo, Tayabas City with Sampling Sites</h2>
                            <p class="setting">September 2024 <br><br></p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/20240925_Allen Rafael Ocampo[2] (2).jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Topographic Map</h2>
                            <p class="setting">September 2024 <br><br>Of Mt. Banahaw San Cristobal Protected Landscape showing the locations of sampling sites (Domesticated & Philippine Warty Pigs) in Tayabas, Quezon</p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/20240925_Jerbie Alindogan (2).jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Topographic Map</h2>
                            <p class="setting">September 2024 <br><br>Of Mt. Banahaw San Cristobal Protected Landscape showing the locations of direct and indirect observations of long-tailed macaques.</p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/20240930_Bless Mayonado.jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Spatial Distribution Map of Trees in Candelaria, Quezon</h2>
                            <p class="setting">September 2024 <br><br></p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/20241204_Xyla Siman (1).jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Topographic Map of Mt. Banahaw de Tayabas</h2>
                            <p class="setting">December 2024 <br><br>Showing the sampling sites.</p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/20241206_PahingaNorte.jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Spatial Distribution Map</h2>
                            <p class="setting">December 2024 <br><br>Spatial distribution map of selected trees and roads in Brgy. Pahinga Norte, Candelaria, Quezon.</p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/20250106_oblepias.jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Forest Buffer Zone of Mt. Banahaw de Liliw and Nagcarlan</h2>
                            <p class="setting">December 2024 <br><br> Forest buffer zone of Mt. Banahaw de Liliw and Nagcarlan including barangar near/reside.</p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/2024042401_Jane Louise Lim_BarangayS5-7-8 (1).jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Map of Barangays 5, 7, & 8, Lucena City</h2>
                            <p class="setting">April 2024 <br><br>Map of barangays 5, 7, & 8 in Lucena City, showing the extent of the 3-meter Easement Zone of Iyam River.</p>
                        </div>  
                    </div>
                    <span></span>
                </div> 
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/c. Brgy7_100yrFH (1).jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>100 Year Flood Hazard Map of Barangay VII, Lucena City</h2>
                            <p class="setting">April 2024 <br><br></p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/dianna naheral_20250127_Naheral3.jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Location Map of Biodiversity Monitoring Sites</h2>
                            <p class="setting">September 2024 <br><br>Location map of biodiversity monitoring sites for bat species in Mt. Banahaw de Tayabas.</p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/Joyce_Ebora.jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Spatial Distribution Map</h2>
                            <p class="setting">October 2024 <br>Spatial distribution map of  Dischidia platyphylla Schltr at Mt. Banahaw - San Cristobal Protectected Landscape in Majayjay, Laguna<br></p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/juliana nicole_DAGDAG_MBDL.jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Species Distribution of Zingiberaceae and Costaceae Family in Mt. Banahaw de Lucban</h2>
                            <p class="setting">November 2024 <br><br></p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/lei danika de leon_TopoHydroMap.jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Topographic and Hydrologic Map</h2>
                            <p class="setting">November 2024 <br><br>Showing the water flow direction in the Palola Streams</p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/MBSCPL_BufferZone200M.jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Mt. Banahaw - San Cristobal Protected Landscape (200 Buffer Zone)</h2>
                            <p class="setting">October 2024 <br><br>Showing the municipalities of Candelaria and Sariaya Quezon</p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/Monette_Liquefaction_QP.jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Liquefecation Exposure Map of Quezon Province</h2>
                            <p class="setting">October 2024 <br><br></p>
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../mapping-img/2024/pagbilao,sariaya&lucban_municipal_waters.jpg" class="achieve-img" alt="Mapping Achievement">
                        <div class="achievement-det">
                            <h2>Map Showing the Extent of Municipal Waters</h2>
                            <p class="setting">2024 <br><br>Map showing the extent of municipal waters of Pagbilao, Lucena City and Sariaya, Quezon</p>
                        </div>  
                    </div>
                    <span></span>
                </div>
            `
                },

                //TRAINING CENTER

                training: {
                    title: "Geospatial Capability Enhancement Training Center",
                    content: `
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../img/training.jpg" class="achieve-img" alt="Training Achievement">
                        <div class="achievement-det">
                            <h2>Geospatial Capability Enhancement Training</h2>
                            <p class="setting">SLSU Training Center <br> March 2025</p>
                            <p>This program aims to enhance the technical capacity of professionals in geospatial 
                               tools and remote sensing technologies for better decision-making.</p>                      
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../img/training.jpg" class="achieve-img" alt="Training Achievement">
                        <div class="achievement-det">
                            <h2>Geospatial Capability Enhancement Training</h2>
                            <p class="setting">SLSU Training Center <br> March 2025</p>
                            <p>This program aims to enhance the technical capacity of professionals in geospatial 
                               tools and remote sensing technologies for better decision-making.</p>                      
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../img/training.jpg" class="achieve-img" alt="Training Achievement">
                        <div class="achievement-det">
                            <h2>Geospatial Capability Enhancement Training</h2>
                            <p class="setting">SLSU Training Center <br> March 2025</p>
                            <p>This program aims to enhance the technical capacity of professionals in geospatial 
                               tools and remote sensing technologies for better decision-making.</p>                      
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../img/training.jpg" class="achieve-img" alt="Training Achievement">
                        <div class="achievement-det">
                            <h2>Geospatial Capability Enhancement Training</h2>
                            <p class="setting">SLSU Training Center <br> March 2025</p>
                            <p>This program aims to enhance the technical capacity of professionals in geospatial 
                               tools and remote sensing technologies for better decision-making.</p>                      
                        </div>  
                    </div>
                    <span></span>
                </div>
            `
                },

                //RESEARCH AND DEVELOPMENT

                research: {
                    title: "Technology Driven Research and Development Provider",
                    content: `
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../img/cherm-logo.png" class="achieve-img" alt="Research Achievement">
                        <div class="achievement-det">
                            <h2>Technology-Driven Research and Development</h2>
                            <p class="setting">None<br> 2025</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur.</p>                      
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../img/cherm-logo.png" class="achieve-img" alt="Research Achievement">
                        <div class="achievement-det">
                            <h2>Technology-Driven Research and Development</h2>
                            <p class="setting">None<br> 2025</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur.</p>                         
                        </div>  
                    </div>
                    <span></span>
                </div>
                <div class="list-achieve" >
                    <div class="achieve-con">
                        <img src="../img/cherm-logo.png" class="achieve-img" alt="Research Achievement">
                        <div class="achievement-det">
                            <h2>Technology-Driven Research and Development</h2>
                            <p class="setting">None<br> 2025</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur.</p>                       
                        </div>  
                    </div>
                    <span></span>
                </div>
            `
                }
            };

            // Function to update the content and title in #achieve
            function updateAchievement(category) {
                achieveTitle.textContent = achievements[category].title; // Update the title
                achieveContainer.innerHTML = achievements[category].content; // Update the content
            }

            document.querySelector(".mapping").addEventListener("click", function () {
                updateAchievement("mapping");
            });

            document.querySelector(".training").addEventListener("click", function () {
                updateAchievement("training");
            });

            document.querySelector(".research").addEventListener("click", function () {
                updateAchievement("research");
            });
        });


        const aboutUs = document.getElementById('navbarDropdown');
        const dropdown = document.getElementById('customDropdown');

        if (aboutUs && dropdown) {
            // Show on hover
            aboutUs.addEventListener('mouseenter', () => {
                dropdown.style.display = 'block';
            });

            aboutUs.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    if (!dropdown.matches(':hover')) {
                        dropdown.style.display = 'none';
                    }
                }, 200);
            });

            dropdown.addEventListener('mouseenter', () => {
                dropdown.style.display = 'block';
            });

            dropdown.addEventListener('mouseleave', () => {
                dropdown.style.display = 'none';
            });

            // Show on click too
            aboutUs.addEventListener('click', (e) => {
                e.preventDefault(); // prevent link jump
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            });
        }