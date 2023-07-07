import React, { Component } from 'react'
import './style.css'
const listItem = [
    {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./img/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        img: "./img/g1.jpg"
    },
    {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: "./img/v2.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        img: "./img/g2.jpg"
    },
    {
        id: 3,
        price: 30,
        name: "DIOR D6700HQ",
        url: "./img/v3.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        img: "./img/g3.jpg"
    },
    {
        id: 4,
        price: 70,
        name: "DIOR D6005U",
        url: "./img/v4.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        img: "./img/g4.jpg"
    },
    {
        id: 5,
        price: 40,
        name: "PRADA P8750",
        url: "./img/v5.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        img: "./img/g5.jpg"
    },
    {
        id: 6,
        price: 60,
        name: "PRADA P9700",
        url: "./img/v6.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        img: "./img/g6.jpg"
    },
    {
        id: 7,
        price: 80,
        name: "FENDI F8750",
        url: "./img/v7.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        img: "./img/g7.jpg"
    },
    {
        id: 8,
        price: 100,
        name: "FENDI F8500",
        url: "../img/v8.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        img: "./img/g8.jpg"
    },
    {
        id: 9,
        price: 60,
        name: "FENDI F4300",
        url: "./img/v9.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        img: "./img/g9.jpg"
    }
]

export default class HomeLayout extends Component {
    state = {
        srcImage: null,
        selectedItem: null
    }
    changeSrcImage = (src, item) => {
        return () => {
            this.setState({ srcImage: src, selectedItem: item })
        }
    }
    render() {
        const { srcImage, selectedItem } = this.state;
        return (
            <div style={{
                backgroundImage: './img.background.jpg'
            }}>
                <div>
                    <header>
                        <h1 className="text-center text-white">TRY GLASS APP ONLINE</h1>
                    </header>

                    <div className='container'>
                        <div className="content d-flex justify-content-center">
                            <div className="content-img">
                                <img className='img-main' src="./img/model.jpg" alt="Hình ảnh 2" />
                                {srcImage && (
                                    <img
                                        className="option-img"
                                        style={{ display: "block" }}
                                        src={this.state.srcImage}
                                        alt=""
                                    />
                                )}
                                {selectedItem && (
                                    <div className='item-detail'>
                                        <h2 className='text-primary-emphasis'>{selectedItem.name}</h2>
                                        <h4 className='text-success'>{selectedItem.price}$</h4>
                                        <p>{selectedItem.desc}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="glass mt-5 col-md-12 text-center">
                                <h2>Hình sản phẩm để lựa chọn:</h2>
                                <div className="row">
                                    {listItem.map(item => (
                                        <button
                                            key={item.id}
                                            onClick={this.changeSrcImage(item.url, item)}
                                            className="col-2 btn"
                                        >
                                            <img src={item.img} className="img-thumbnail" alt="Hình ảnh 3" />
                                        </button>
                                    ))}
                                    {/* <button onClick={this.changeSrcImage('./img/v1.png')} className='col-2 btn'>
                                    <img src=./img/g1.jpg className="img-thumbnail" alt="Hình ảnh 3" />
                                </button>
                                <button onClick={this.changeSrcImage('./img/v2.png')} className='col-2 btn'>
                                    <img src="./img/g2.jpg" className="img-thumbnail" alt="Hình ảnh 3" />
                                </button>
                                <button onClick={this.changeSrcImage('./img/v3.png')} className='col-2 btn'>
                                    <img src="./img/g3.jpg" className="img-thumbnail" alt="Hình ảnh 3" />
                                </button>
                                <button onClick={this.changeSrcImage('./img/v4.png')} className='col-2 btn'>
                                    <img src="./img/g4.jpg" className="img-thumbnail" alt="Hình ảnh 3" />
                                </button>
                                <button onClick={this.changeSrcImage('./img/v5.png')} className='col-2 btn'>
                                    <img src="./img/g5.jpg" className="img-thumbnail" alt="Hình ảnh 3" />
                                </button>
                                <button onClick={this.changeSrcImage('./img/v6.png')} className='col-2 btn'>
                                    <img src="./img/g6.jpg" className="img-thumbnail" alt="Hình ảnh 3" />
                                </button>
                                <button onClick={this.changeSrcImage('./img/v7.png')} className='col-2 btn'>
                                    <img src="./img/g7.jpg" className="img-thumbnail" alt="Hình ảnh 3" />
                                </button>
                                <button onClick={this.changeSrcImage('./img/v8.png')} className='col-2 btn'>
                                    <img src="./img/g8.jpg" className="img-thumbnail" alt="Hình ảnh 3" />
                                </button>
                                <button onClick={this.changeSrcImage('./img/v9.png')} className='col-2 btn'>
                                    <img src="./img/g9.jpg" className="img-thumbnail" alt="Hình ảnh 3" />
                                </button> */}
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className='item'>
                        <img className='option-img' src={this.state.srcImage} alt="" />
                        <div className='item-detail'>
                            <h2>111111111111111111</h2>
                            <p>22222222222222222</p>
                        </div>
                    </div> */}

                </div>
            </div>
        )
    }
}
