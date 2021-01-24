function entrysubmit(){
    /*
    //const initDate = document.getElementById('dateinput').value;
    const dateinput = new Date('01/03/2021');
    const month = dateinput.getMonth()
    const day = dateinput.getDay();
    const date = dateinput.getDate();
    const year = dateinput.getFullYear();
    const output = document.getElementById('output');
    */
   const months = {
    0:'January',
    1:'February',
    2:'March',
    3:'April',
    4:'May',
    5:'June',
    6:'July',
    7:'August',
    8:'September',
    9:'October',
    10:'Novermber',
    11:'December'
}

    const content = document.getElementById('entrybox').value;
    if(content === ''){}

    else{
    const d = new Date(content);

    //calculations for the 5 days before the date
    const dayone = new Date(content)
    dayone.setDate(d.getDate() - 3).toString();
    const daytwo = new Date(content)
    daytwo.setDate(d.getDate() - 2).toString();
    const daythree = new Date(content)
    daythree.setDate(d.getDate() - 1).toString();
    const dayfour = new Date(content)
    dayfour.setDate(d.getDate() - 0).toString();
    const dayfive = new Date(content)
    dayfive.setDate(d.getDate() + 1).toString();
   
    //dictionary to store the days, can be edited like dayone.getDay()
    const dict = {
        dayone:dayone,
        daytwo:daytwo,
        daythree:daythree,
        dayfour:dayfour,
        dayfive:dayfive
    }
    //output.innerHTML = monthone + ' ' + dict.dayone.getDate() + ' ' + 'do this: ';
    
    const one = document.getElementById('dayone');
    let monthone = dayone.getMonth();
    monthone = months[monthone];
    var dateone = dayone.getDate();
    let yearone = dayone.getFullYear();
    one.innerHTML = monthone + ' ' + dateone + ' & '  + (dateone+1) + ' & ' + (dateone + 2) + ' ' + yearone;
    /*
    const two = document.getElementById('daytwo');
    let monthtwo = daytwo.getMonth();
    monthtwo = months[monthtwo]
    let datetwo = daytwo.getDate();
    let yeartwo = daytwo.getFullYear();
    two.innerHTML = monthtwo + ' ' + datetwo + ' ' + yeartwo;

    const three = document.getElementById('daythree');
    let monththree = daythree.getMonth();
    monththree = months[monththree];
    let datethree = daythree.getDate();
    let yearthree = daythree.getFullYear();
    three.innerHTML = monththree + ' ' + datethree + ' ' + yearthree;
    */
    const four = document.getElementById('dayfour');
    let monthfour = dayfour.getMonth();
    monthfour = months[monthfour]
    let datefour = dayfour.getDate();
    let yearfour = dayfour.getFullYear();
    four.innerHTML = monthfour + ' ' + datefour + ' ' + yearfour;

    const five = document.getElementById('dayfive');
    let monthfive = dayfive.getMonth();
    monthfive = months[monthfive]
    let datefive = dayfive.getDate();
    let yearfive = dayfive.getFullYear();
    five.innerHTML = monthfive + ' ' + datefive + ' ' + yearfive;


    const entrypage = document.getElementById('entrypage');
    entrypage.style.display = 'none';
    entrypage.style.opacity = 0;
    const mainpage = document.getElementById('mainpage');
    mainpage.style.display = 'block';
    mainpage.style.opacity = 1;
    document.body.style.overflow = 'auto'
}; 
}