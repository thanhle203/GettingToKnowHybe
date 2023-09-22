/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'

const Layout = () => {
    return (
        <>
            <div className='layout'>
                <Card image='./Jungkook.jfif' name='Jeon Jung-kook' group='BTS' link='https://juksun.com/biography/jungkook-bts/' />
                <Card image='./Jimin.jpg' name='Park Ji-min' group='BTS' link='https://juksun.com/biography/jimin-bts/' />
                <Card image='./RM.jpg' name='Kim Nam-joon' group='BTS' link='https://juksun.com/biography/rm-bts/' />
                <Card image='./Jin.jpg' name='Kim Seok-jin' group='BTS' link='https://juksun.com/biography/jin-bts/' />
                <Card image='./Taehyung.jpg' name='Kim Tae-hyung' group='BTS' link='https://juksun.com/biography/v-bts/' />
                <Card image='./Jhope.jpg' name='Jung Ho-seok' group='BTS' link='https://juksun.com/biography/j-hope-bts/' />
                <Card image='./Suga.jpg' name='Min Yoon-gi' group='BTS' link='https://juksun.com/biography/suga-bts/' />
                <Card image='./Chaewon.jpg' name='Kim Chae-won' group='Le Sserafim' link='https://le-sserafim.fandom.com/wiki/Kim_Chaewon' />
                <Card image='./Yunjin.jpg' name='Huh Yun-jin' group='Le Sserafim' link='https://le-sserafim.fandom.com/wiki/Huh_Yunjin' />
                <Card image='./Kazuha.jpg' name='Kazuha' group='Le Sserafim' link='https://le-sserafim.fandom.com/wiki/Kazuha' />
                <Card image='./Sakura.jpg' name='Sakura Miyawaki' group='Le Sserafim' link='https://le-sserafim.fandom.com/wiki/Sakura' />
                <Card image='./Eunchae.jpg' name='Hong Eun-chae' group='Le Sserafim' link='https://le-sserafim.fandom.com/wiki/Hong_Eunchae' />
            </div>
        </>
    )
}

export default Layout;