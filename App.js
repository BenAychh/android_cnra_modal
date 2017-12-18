import React from 'react';
import { StyleSheet, Text, View, Button, Picker, Modal } from 'react-native';

export default class App extends React.Component {
  state = {
    selectedDuration: '15',
    isPickerVisible: false,
  }

  render() {
    const { selectedDuration } = this.state
    return (
      <View style={styles.container}>
        <Button
          title={`${selectedDuration} minutes`}
          onPress={() => { this.setState({ isPickerVisible: true }) }}
        />

        <Modal
          visible={this.state.isPickerVisible}
          onRequestClose={() => this.setState({ isPickerVisible: false })}
        >
          <Picker
            selectedValue={selectedDuration}
            onValueChange={(value) => {
              this.setState({ selectedDuration: value })
            }}
          >
            {[15, 30, 45, 60].map(duration => (
              <Picker.Item
                key={`duration-${duration}`}
                label={`${duration.toString()} minutes`}
                value={duration}
              />
              ))}
          </Picker>
          <Button
            title="OK"
            onPress={() => {
              this.setState({ isPickerVisible: false })
            }}
            color="#dddddd"
          />
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
