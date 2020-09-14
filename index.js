/**
 * @format
 */

import React from 'react';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';
import {renderInstance} from 'piral-native';
import {name as appName} from './app.json';
import {styles} from './style';
import Layout from './App';

renderInstance(appName, {
  requestPilets() {
    return fetch('https://feed.piral.cloud/api/v1/pilet/empty')
      .then(res => res.json())
      .then(res => res.items);
  },
  state: {
    routes: {
      '/': () => (
        <View>
          <Text style={styles.sectionTitle}>Text of the Piral HP</Text>
          <Link to="/sample">
            <Text>To secondary route</Text>
          </Link>
        </View>
      ),
      '/sample': () => (
        <View>
          <Text style={styles.sectionTitle}>Secondary route</Text>
          <Link to="/">
            <Text>To root route</Text>
          </Link>
        </View>
      ),
    },
  },
  layout: {
    Layout,
  },
});
