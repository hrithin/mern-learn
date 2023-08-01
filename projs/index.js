const pros= document.getElementById('a')


fetch('https://api.rawg.io/api/games?key=c86ac760dc5344b3af045aeaa2e8172b&page_size=30')
    .then(response => response.json())
    .then(commits => {

        for (let i = 0; i < commits.results.length; i++) {
            console.log(commits.results[i].name)
            const d = document.createElement('div')
            d.classList.add("blo")
            d.innerHTML= `<img style="width:100%" src="${commits.results[i].background_image}"></img>
            <p>${commits.results[i].name}<p>
                                                          `
           pros.append(d)
            
        }

        




    });

