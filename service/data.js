export const removeData = (datas) => {

    const datasUnicas = [];

    datas.forEach((data => {

        if(datasUnicas.indexOf(data.dataFormatada) == -1) {
            datasUnicas.push(data.dataFormatada)
        }
    }))

    return datasUnicas;
}

export const ordenaData = (data) => {

    data.sort((a,b) => {
        const primeiraData = moment(a, 'DD/MM/YYY').format('YYYYMMDD')
        const segundaData = moment(b, 'DD/MM/YYY').format('YYYYMMDD')
        
        return primeiraData - segundaData
    })

}