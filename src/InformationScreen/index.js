import React from 'react'
import { View, Text } from 'react-native'

import A from '../A'
import Logo from '../Logo'
import styles from './styles'

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Logo />
        <Text style={styles.text}>
          Este ícone foi feito por <A style={styles.link} href='https://www.flaticon.com/authors/freepik'>Freepik</A> da <A style={styles.link} href='https://www.flaticon.com/free-icon/automobile_1785810'>Flaticon</A>.
          Foi editado com <A style={styles.link} href='https://svg-edit.github.io/svgedit/'>SVG Editor</A> e formatado com <A style={styles.link} href='https://makeappicon.com'>MakeAppIcon</A>, <A style={styles.link} href='https://apetools.webprofusion.com/#/tools/imagegorilla'>Gorilla Image</A> e <A style={styles.link} href='https://www.norio.be/graphic-generator'>Graphic Generator</A>.
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.div}>
        <Text style={styles.text}>
          Este aplicativo foi desenvolvido por <A style={styles.link} href='https://nhanderu.com'>Rafael Escobar</A> e seu código está disponível em domínio público no <A style={styles.link} href='https://github.com/nhanderu/c3f'>Github</A>.
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.div}>
        <Text style={styles.text}>
          Ao utilizar o aplicativo C3F, o usuário concorda em se responsabilizar pelos dados inseridos e pelo uso da plataforma.
        </Text>
      </View>
    </View>
  )
}
