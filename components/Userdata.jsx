import {View, Text} from 'react-native';

export default Userdata = props => {
  const item = props.data;
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.email}</Text>
    </View>
  );
};
