
    const planets = [
        { planetName: "Sun", gravity: 27.9, image: "https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg" },
        { planetName: "Moon", gravity: 0.1655, image: "https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg" },
        { planetName: "Mercury", gravity: 0.377, image: "https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg" },
        { planetName: "Venus", gravity: 0.9032, image: "https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg" },
        { planetName: "Earth", gravity: 1, image: "https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015__340.jpg" },
        { planetName: "Mars", gravity: 0.3895, image: "https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg" },
        { planetName: "Jupiter", gravity: 2.640, image: "https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg" },
        { planetName: "Saturn", gravity: 1.139, image: "https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg" },
        { planetName: "Uranus", gravity: 0.917, image: "https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg" },
        { planetName: "Neptune", gravity: 1.148, image: "https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg" },
    ]

    planets.map((ele) => {
        const options = document.createElement("option")
        options.innerHTML = ele.planetName
        options.value = ele.gravity
        options.setAttribute("imageSrc", ele.image)

        const select = document.getElementById("selectPlanet")
        select.appendChild(options)


    })

    function calcWeight() {
        var mass = +document.getElementById("inputWeight").value
        const select = document.getElementById("selectPlanet")

        var selectedIndex = select.selectedIndex
        // console.log(selectedIndex);
        const selectedOption = select.options[selectedIndex]
        console.log(selectedOption);

        const gravity = +selectedOption.value
        // console.log(gravity);

        const weight = mass * gravity
        // console.log(weight);




        const h1 = document.getElementById("h1")
        var error = "please enter your mass"
        if (mass == "") {
            h1.innerText = error
        } else if (mass <= 0) {
            h1.innerText = "plz enter mass greater than 0"
        } else {
            h1.innerText = Math.abs(weight)
            var imgsrc = selectedOption.getAttribute("imageSrc")
            const img = document.getElementById("image")
            img.src = imgsrc
        }
    }

