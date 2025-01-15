'use client'
import FuelContainer from "@/assets/images/container1.png";
import ManContainer from "@/assets/images/container_man.png";
import SteelContainer from '@/assets/images/steelContainer.png'
import { Gallery, Item } from 'react-photoswipe-gallery'
import styles from './Gallery.module.css'
import {BarlowCondensedFont800} from "@/app/fonts";
import {useState} from "react";

export const GallerySection = () => {

    const [selectedCategory, setSelectedCategory] = useState('1');



    return <section className={styles.sectionWrapper}>
        <h2 className={styles.header}>Galeria</h2>
        <div>
            <ul className={`${styles.categoriesList} ${BarlowCondensedFont800.className}`}>
                <li onClick={() => setSelectedCategory('1')}>Kategoria 1</li>
                <li onClick={() => setSelectedCategory('2')}>Kategoria 2</li>
                <li onClick={() => setSelectedCategory('3')}>Kategoria 3</li>
            </ul>
        </div>
        <div style={ {display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem'}}>
            {selectedCategory === '1' && <Gallery>
                <div style={{cursor: 'pointer'}}>
                    <Item
                        original={FuelContainer.src}
                        thumbnail={FuelContainer.src}
                        width="800"
                        height="500"
                    >
                        {({ref, open}) => (
                            <img ref={ref} onClick={open} src={FuelContainer.src} width={300} height={200}/>
                        )}
                    </Item>
                </div>

                <div style={{cursor: 'pointer'}}>
                    <Item
                        original={FuelContainer.src}
                        thumbnail={FuelContainer.src}
                        width="800"
                        height="500"
                    >
                        {({ref, open}) => (
                            <img ref={ref} onClick={open} src={FuelContainer.src} width={300} height={200}/>
                        )}
                    </Item>
                </div>
            </Gallery>}

            {selectedCategory === '2' && <Gallery>
                <Item
                    original={ManContainer.src}
                    thumbnail={ManContainer.src}
                    width="800"
                    height="500"
                >
                    {({ref, open}) => (
                        <img ref={ref} onClick={open} src={ManContainer.src} width={300} height={200}/>
                    )}
                </Item>
                <Item
                    original={ManContainer.src}
                    thumbnail={ManContainer.src}
                    width="800"
                    height="500"
                >
                    {({ref, open}) => (
                        <img ref={ref} onClick={open} src={ManContainer.src} width={300} height={200}/>
                    )}
                </Item>
            </Gallery>}{selectedCategory === '3' && <Gallery>
                <Item
                    original={SteelContainer.src}
                    thumbnail={SteelContainer.src}
                    width="800"
                    height="500"
                >
                    {({ref, open}) => (
                        <img ref={ref} onClick={open} src={SteelContainer.src} width={300} height={200}/>
                    )}
                </Item>
                <Item
                    original={SteelContainer.src}
                    thumbnail={SteelContainer.src}
                    width="800"
                    height="500"
                >
                    {({ref, open}) => (
                        <img ref={ref} onClick={open} src={SteelContainer.src} width={300} height={200}/>
                    )}
                </Item>
            </Gallery>}
        </div>

    </section>
}