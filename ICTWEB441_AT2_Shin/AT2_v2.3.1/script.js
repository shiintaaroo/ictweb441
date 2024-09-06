        //__________API function starts from here!!_________
        function getApiContent(){ // function get API content
            URL="https://rss.app/feeds/v1.1/k8uPmJlasJdehluB.json"; //define your URL
                fetch(URL) // fetch the URL
                    .then(response => response.json()) // Now API is converted into JSON
                    .then(data => {alert(data.version) // Data is JSON, and show alert with data version
                        if (data.version) { //if data.version is in the API
                            document.getElementById("Rss_version").innerHTML = "Version: " +data.version;// document(select whole document), getElementId(find the ID"Rss_version"),innerHTML(inside your HTML), is data.version.
                        } else { //if data.version is "NOT" in the API
                            document.getElementById("Rss_version").innerHTML = "Sorry, no response";// document(select whole document), getElementId(find the ID"Rss_version"),innerHTML(inside your HTML), response that "Sorry, no response".
                            }//close else tag
                        if (data.description) {//if data.description is in the API
                            document.getElementById("Rss_description").innerHTML ="description: " + data.description;// document(select whole document), getElementId(find the ID"Rss_version"),innerHTML(inside your HTML), is data.description.
                        } else {  //if data.description is "NOT" in the API
                            document.getElementById("Rss_description").innerHTML = "Sorry, no Rss_description";// document(select whole document), getElementId(find the ID"Rss_version"),innerHTML(inside your HTML), response that "Sorry,  no Rss_description".
                            }//close else tag
                            if (data.items[0].guid) {//if data.items[0].guid. You need [0] it's becouse items is a list.
                            document.getElementById("Rss_guid").innerHTML = "Guid: " +data.items[0].guid;// document(select whole document), getElementId(find the ID"Rss_version"),innerHTML(inside your HTML), is data.items[0].guid.  
                        } else {//if data.items[0].guid is "NOT" in the API
                            document.getElementById("Rss_pubDate").innerHTML = "Sorry, no Rss_guid";// document(select whole document), getElementId(find the ID"Rss_version"),innerHTML(inside your HTML), response that "Sorry,  no Rss_guid.
                            }//close else tag
                    }) //close .then(data => {alert(data.version)
        }//close function getApiContent(){            
        //_______darkmode function starts from here!!________
        function darkmode_toggle() {//define function darkmode_toggle(On and off) 
            var element = document.body;//Varuble is element, the element is in the body.
            element.classList.toggle("dark-mode");// the element in the CSS, toggle = dark-mode(it's ID)  
            //console.log("dark-mode");
        }//close  function darkmode_toggle() {/
        //__________Second API function starts from here!!_________
        function getApiwether(){ //define wether API
            URL="http://api.weatherapi.com/v1/current.json?key=53a320b2a2084a99ad241126242208&q=Mildura&aqi=no"; //URK
                fetch(URL) //fetch the URL
                    .then(response => response.json())// data is json now
                    .then(data => {//???
                        if (data.current.temp_c) { //if data.current.temp_c is there
                            document.getElementById("Rss_wether").innerHTML = "Temputer " + data.current.temp_c;//show temp       
                        } else { //otherwise
                            document.getElementById("Rss_wether").innerHTML = "Sorry, no response";//show "sorry"
                            }// end tag
                        if (data.current.temp_c > 25) {//and then temp is more than 25
                            status = "Wow It is Hot";//show "Wow It is Hot"
                            var x = document.createElement("IMG");//variable x is IMG now
                            x.setAttribute("src", "hot.jpg");//now x has a method "setAttribute" and src = hot.jpg
                            x.setAttribute("width", "228");//width
                            x.setAttribute("height", "228");//hight
                            x.setAttribute("alt", "hot");//alt = hot
                            document.body.appendChild(x);//document.body is parent node, appendChild(x) is contained in parent node
                            } else if (data.current.temp_c >= 10 && data.current.temp_c <= 24) {//temp between 10-24
                            status = "It is Comfortable";//show "It is Comfortable"
                            var x = document.createElement("IMG");//variable x is IMG now
                            x.setAttribute("src", "Comfortable.png");//now x has a method "setAttribute" and src = Comfortable.png
                            x.setAttribute("width", "228");//width
                            x.setAttribute("height", "228");//hight
                            x.setAttribute("alt", "Comfortable");//alt = hot
                            document.body.appendChild(x);//document.body is parent node, appendChild(x) is contained in parent node
                            } else {//otherwise
                            status = "Noooo It too Cold";// show "Cold"
                            var x = document.createElement("IMG");//variable x is IMG now
                            x.setAttribute("src", "cold.png");//now x has a method "setAttribute" and src = cold.png
                            x.setAttribute("width", "228");//width
                            x.setAttribute("height", "228");//hight
                            x.setAttribute("alt", "cold");//alt = hot
                            document.body.appendChild(x);//document.body is parent node, appendChild(x) is contained in parent node
                            }//end tag
                            document.getElementById("temperature-status").innerHTML = status;//where you show the message
        })
    }                  
        //______________const button1 = document.getElementById("button1"); _______________________________
        document.getElementById("age").addEventListener("submit", function (event) { 
            event.preventDefault(); 
            get_age(); 
        });        
        function get_age() { 
            let name = document.getElementById("age").value; 
            let URL = "https://api.agify.io?name="; 
            fetch(URL + age) 
                .then(response => response.json()) 
                .then(data => { 
                    if (data.age) { 
                        if (data.age > 200 || data.age <= 0) 
                            {alert("Data entry invalid");
                        } else {
                            document.getElementById("result").innerHTML = "Age: " + data.age; 
                        }
                    } else { 
                        document.getElementById("result").innerHTML = "Not Found"; 
                    }                                
 })//end tag     
}//end tag