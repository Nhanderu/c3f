import React from 'react'
import { View, Text } from 'react-native'

import Link from '../Link'
import Logo from '../Logo'
import styles from './styles'

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Logo />
        <Text style={styles.text}>
          Este ícone foi feito por <Link style={styles.link} href='https://www.flaticon.com/authors/freepik'>Freepik</Link> da <Link style={styles.link} href='https://www.flaticon.com/free-icon/automobile_1785810'>Flaticon</Link>.
          Foi editado com <Link style={styles.link} href='https://svg-edit.github.io/svgedit/'>SVG Editor</Link> e formatado com <Link style={styles.link} href='https://makeappicon.com'>MakeAppIcon</Link>, <Link style={styles.link} href='https://apetools.webprofusion.com/#/tools/imagegorilla'>Gorilla Image</Link> e <Link style={styles.link} href='https://www.norio.be/graphic-generator'>Graphic Generator</Link>.
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.div}>
        <Text style={styles.text}>
          Este aplicativo foi desenvolvido por <Link style={styles.link} href='https://nhanderu.com'>Rafael Escobar</Link> e seu código está disponível em domínio público no <Link style={styles.link} href='https://github.com/nhanderu/c3f'>Github</Link>.
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
