function hide() {
    let plus = document.querySelectorAll(".fa-plus"),
        minus = document.querySelectorAll(".fa-minus"),
        hide = document.querySelectorAll(".hide");
    
    console.log(hide);
    console.log(plus);
    console.log(minus);
    
    plus.forEach((e,i) => {
        e.onclick = () => {
            minus[i].style.display = 'inline';
            hide[i].style.display = 'flex';
            e.style.display = 'none';
        }
    })
    minus.forEach((e,i) => {
        e.onclick = () => {
            plus[i].style.display = 'inline';
            hide[i].style.display = 'none';
            e.style.display = 'none';
        }
    })
}
function row() {
    let holat = document.querySelector(".holat");

    let dataset = [
        {
            tarif: "Ta'rif: 'Eco'",
            time: "1 soat",
            artist: "Fonogramma",
            sozanda: "Yo'q",
            raqqosa: "Yo'q",
            boshlovchi: "1 nafar",
            oformlenia: "Yo'q",
            videograf: "Yo'q",
            tasvirchi: "Yo'q",
            kortej: "Yo'q",
            cost: "300$",
        },
        {
            tarif: "Ta'rif: 'Eco Plus'",
            time: "1.5 soat",
            artist: "Fonogramma",
            sozanda: "Yo'q",
            raqqosa: "Yo'q",
            boshlovchi: "1 nafar",
            oformlenia: "Bor: oddiy",
            videograf: "Yo'q",
            tasvirchi: "1 nafar",
            kortej: "Yo'q",
            cost: "450$",
        },
        {
            tarif: "Ta'rif: 'Eco Pro'",
            time: "1.5 soat",
            artist: "Fonogramma",
            sozanda: "Yo'q",
            raqqosa: "Yo'q",
            boshlovchi: "1 nafar",
            oformlenia: "Bor: o'rtacha",
            videograf: "1 nafar",
            tasvirchi: "2 nafar",
            kortej: "Yo'q",
            cost: "570$",
        },
        {
            tarif: "Ta'rif: 'Medium'",
            time: "2.5 soat",
            artist: "Fonogramma",
            sozanda: "Yo'q",
            raqqosa: "Yo'q",
            boshlovchi: "1 nafar",
            oformlenia: "Bor: yuqori darajada",
            videograf: "2 nafar",
            tasvirchi: "3 nafar",
            kortej: "Yo'q",
            cost: "650$",
        },
        {
            tarif: "Ta'rif: 'Medium Plus'",
            time: "1.5 soat",
            artist: "1 nafar: jonli",
            sozanda: "5 kishilik",
            raqqosa: "Yo'q",
            boshlovchi: "1 nafar",
            oformlenia: "Bor: yuqori darajada",
            videograf: "2 nafar",
            tasvirchi: "3 nafar",
            kortej: "Yo'q",
            cost: "760$",
        },
        {
            tarif: "Ta'rif: 'Medium Pro'",
            time: "2.5 soat",
            artist: "1 nafar: jonli",
            sozanda: "7 kishilik",
            raqqosa: "Yo'q",
            boshlovchi: "2 nafar",
            oformlenia: "Bor: yuqori darajada",
            videograf: "2 nafar",
            tasvirchi: "3 nafar",
            kortej: "3 ta avtomobil: 1 ta Mercedes Bens va 2 ta Captiva",
            cost: "920$",
        },
        {
            tarif: "Ta'rif: 'Vip'",
            time: "2.5 soat",
            artist: "2 nafar: jonli",
            sozanda: "7 kishilik",
            raqqosa: "2 nafar",
            boshlovchi: "2 nafar",
            oformlenia: "Bor: yuqori darajada",
            videograf: "2 nafar",
            tasvirchi: "3 nafar",
            kortej: "3 ta avtomobil: 1 ta Mercedes Bens va 2 ta Rolls Royce",
            cost: "1000$",
        },
        {
            tarif: "Ta'rif: 'Vip Plus'",
            time: "2.5 soat",
            artist: "2 nafar: jonli",
            sozanda: "8 kishilik",
            raqqosa: "4 nafar",
            boshlovchi: "2 nafar",
            oformlenia: "Bor: yuqori darajada + Kelin salom marosimi uchun",
            videograf: "3 nafar",
            tasvirchi: "4 nafar",
            kortej: "5 ta avtomobil: 1 ta Mercedes Bens va 4 ta Rolls Royce",
            cost: "1300$",
        },
        {
            tarif: "Ta'rif: 'Vip Pro'",
            time: "2.5 soat",
            artist: "2 nafar: jonli",
            sozanda: "8 kishilik",
            raqqosa: "4 nafar",
            boshlovchi: "2 nafar",
            oformlenia: "Bor: yuqori darajada + Kelin salom marosimi uchun",
            videograf: "3 nafar",
            tasvirchi: "4 nafar",
            kortej: "6 ta avtomobil: 1 ta Mercedes Bens + 4 ta Range Rover + 1 ta Range Rover Big",
            cost: "1600$",
        },
        {
            tarif: "Ta'rif: 'Vipper'",
            time: "3 soat",
            artist: "2 nafar: jonli",
            sozanda: "10 kishilik",
            raqqosa: "4 nafar",
            boshlovchi: "4 nafar",
            oformlenia: "Bor: yuqori darajada + Kelin salom marosimi uchun",
            videograf: "5 nafar",
            tasvirchi: "6 nafar",
            kortej: "8 ta avtomobil: 1 ta Mercedes Bens + 6 ta Range Rover + 1 ta Range Rover Big",
            cost: "2200$",
        },
    ]

    for (let i = 0; i < dataset.length; i++) {
        holat.innerHTML += `
        <div class="row">
                    <div class="title-row">
                    <h4>${dataset[i].tarif}</h4>
                    <div class="icon">
                            <span><i class="fa fa-plus"></i></span>
                            <span><i class="fa fa-minus"></i></span>
                        </div>
                        </div>

                        <div class="hide">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Xizmat vaqti</td>
                                    <td>${dataset[i].time}</td>
                                </tr>
                                <tr>
                                    <td>Artist:</td>
                                    <td>${dataset[i].artist}</td>
                                </tr>
                                <tr>
                                    <td>Sozandalar:</td>
                                    <td>${dataset[i].sozanda}</td>
                                </tr>
                                <tr>
                                    <td>Raqqosalar</td>
                                    <td>${dataset[i].raqqosa}</td>
                                </tr>
                                <tr>
                                    <td>Boshlovchi:</td>
                                    <td>${dataset[i].boshlovchi}</td>
                                </tr>
                                <tr>
                                    <td>To'y bezaklari:</td>
                                    <td>${dataset[i].oformlenia}</td>
                                </tr>
                                <tr>
                                    <td>Videograf:</td>
                                    <td>${dataset[i].videograf}</td>
                                </tr>
                                <tr>
                                    <td>Tasvirchi:</td>
                                    <td>${dataset[i].videograf}</td>
                                </tr>
                                <tr>
                                    <td>To'y korteji:</td>
                                    <td>${dataset[i].kortej}</td>
                                </tr>
                                <tr>
                                    <td>Narxi:</td>
                                    <td>${dataset[i].cost}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>                    
                </div>
        `        
    }
}
row()
hide()