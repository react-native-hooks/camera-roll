# @rnhooks/camera-roll [![Build Status](https://travis-ci.com/react-native-hooks/camera-roll.svg?branch=master)](https://travis-ci.com/react-native-hooks/camera-roll) [![Maintainability](https://api.codeclimate.com/v1/badges/1193d3c7e4cac429b41d/maintainability)](https://codeclimate.com/github/react-native-hooks/camera-roll/maintainability)

> React Native hook for [Camera Roll](https://facebook.github.io/react-native/docs/cameraroll#docsNav)

### Installation

```bash
yarn add @rnhooks/camera-roll
```

### Usage

```js
import useCameraRoll from '@rnhooks/camera-roll';

function App() {
  const [photos, getPhotos, saveToCameraRoll, error] = useCameraRoll();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>@rnhooks/camera-roll</Text>
      <Button title="Get Photos" onPress={getPhotos} />
    </View>
  );
}

```

### Output

| Name             | Default              | Type     | Description                  |
| ---------------- | :------------------- | --------:| ---------------------------- |
| photos           | [Defaults](#defaults)| object   | Photos Object                |
| getPhotos        | `(params) => {}`     | function | Get Photos Function          |
| saveToCameraRoll | `() => {}`           | function | Save to Camera Roll Function |
| error            | `undefined`          | string   | Error string                 |

### Defaults
```
const initialState = {
  edges: [],
  page_info: {
    has_next_page: false,
    start_cursor: '',
    end_cursor: '',
  },
};
```
