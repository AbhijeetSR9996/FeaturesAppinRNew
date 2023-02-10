import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, Text } from 'react-native';

//const LeftContent = (props) => <Avatar.Icon {...props} icon="message-plus" />;

const RNPaperUsage = () => {
  const [text, setText] = React.useState('');

  return (
    <View style={{ margin: 40 }}>
      <Card>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          //left={LeftContent}
        />
        <Card.Content>
          <Title>Card Title</Title>
          <Paragraph>Card Description Here</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/600' }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default RNPaperUsage;
