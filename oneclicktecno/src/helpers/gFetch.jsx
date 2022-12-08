let obj = [
    {id: '1', name: 'PRODUCTO 1', categoria: 'Celulares',stock: '100',price: '1500',  foto:'https://www.qloud.ar/SITES/ryr/fotos/20900-0.jpg'},
    {id: '2', name: 'PRODUCTO 2', categoria: 'Celulares',stock: '100',price: '1500',  foto:'https://medias.musimundo.com/medias/00524012-145781-145781-01-145781-01.jpg-size300?context=bWFzdGVyfGltYWdlc3wyNjQwN3xpbWFnZS9qcGVnfGhmYi9oOGYvMTAzODE2NTQ3MjA1NDIvMDA1MjQwMTItMTQ1NzgxLTE0NTc4MV8wMS0xNDU3ODFfMDEuanBnX3NpemUzMDB8MzZmOTA1NjZlZDRkYmM3ZDU1N2FjNzQ5OTY4NDIyYWU5NDJiYjdhZmQ4M2RlODBiNmNjNTJiNjRmOGQ0ZjMyMg'},
    {id: '3', name: 'PRODUCTO 3', categoria: 'Celulares',stock: '100',price: '1500',  foto:'https://images.fravega.com/f500/584d269b9ea76ad3c474789eaa3e207c.jpg'},
    {id: '4', name: 'PRODUCTO 4', categoria: 'Celulares',stock: '100',price: '1500',  foto:'https://images.fravega.com/f500/584d269b9ea76ad3c474789eaa3e207c.jpg'},
    {id: '5', name: 'PRODUCTO 5', categoria: 'Celulares',stock: '100',price: '1500',  foto:'https://images.fravega.com/f500/584d269b9ea76ad3c474789eaa3e207c.jpg'}
]


export const gFetch = (id) => {
    return new Promise( (resolve, reject)=>{
        const condition = true
        if (condition) {    
            setTimeout(()=>{
                resolve(obj )   
            }, 1000)
        } else {
            reject( 'No se pudo ejecutar' )        
        }
    }
    )

}
