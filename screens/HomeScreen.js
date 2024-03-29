import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    //SafeAreaView accounts for notches on phones
    <SafeAreaView style={tw`bg-white h-full`}>
      {/* View is very similar to div */}
      <View style={tw`p-5`}>
        {/* URI is similar to URL, stands for universal resource identifier */}
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={{ uri: 'https://links.papareact.com/gzs' }}
        />

        <GooglePlacesAutocomplete
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={'search'}
          styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
          enablePoweredByContainer={false} //removes powered by Google
          minLength={2} //minimum length of the search
          query={{ key: GOOGLE_MAPS_APIKEY, language: 'en' }}
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400} //only search after 400ms when typing
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
