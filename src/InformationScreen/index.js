import React from 'react'
import { View, Text } from 'react-native'

import A from '../A'
import Logo from '../Logo'
import styles from './styles'

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Logo style={styles.logo} />
        <Text style={styles.text}>
          Este ícone foi feito por <A style={styles.link} href='https://www.flaticon.com/authors/freepik'>Freepik</A> da <A style={styles.link} href='https://www.flaticon.com/free-icon/automobile_1785810'>Flaticon</A> e foi editado com a ajuda do <A style={styles.link} href='https://makeappicon.com'>MakeAppIcon</A>.
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
          bilili bololó
        </Text>
      </View>
    </View>
  )
}
