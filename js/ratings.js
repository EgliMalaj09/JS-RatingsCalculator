function collect_ratings(){
    const ratings = {
        count: 0,
        sum: 0,
        average: 0
    }
    const elements = document.querySelectorAll('.rating');
    elements.forEach((element)=>{
        element.id.replace('star','')
    })
}