import { StyleSheet, Button, View, Text, TextInput } from 'react-native';
import axios from 'axios';
import { useState } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';

const Create = () => {

    const [seedPhrase, setSeedPhrase] = useState("");
    const [pass, setPass] = useState("");
    const [walletAd, setWalletAd] = useState("");

    const createWallet = () => {
        axios.get("http://localhost:3001/create").then((response) => {
            setSeedPhrase(response.data)
        });
    }

    const getAd = () => {
        axios.post("http://localhost:3001/getAd", { pass, seedPhrase }).then((response) => {
            setWalletAd(response.data)
        });
    }

    return (
        <View style={styles.createContainer}>

            {walletAd !== "" ?
                <View>
                    <Text>Wallet Address</Text>
                    <Text>{walletAd}</Text>
                </View> :
                <View>
                    {seedPhrase !== "" ?
                        <View>
                            <Text>Seed Phrase</Text>
                            <Text>{seedPhrase}</Text>
                            <Button
                                title="Copy Phrases"
                                onPress={() => Clipboard.setString(seedPhrase)} />
                            <TextInput style={styles.input}
                                onChangeText={setPass}
                                value={pass}
                                placeholder="Enter password" />
                            <Button
                                title="Set password"
                                onPress={getAd} />
                        </View> :
                        <Button
                            title="Create Wallet"
                            onPress={createWallet} />
                    }
                </View>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    createContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: "column",
        alignItems: 'center'
    },
    text: {
        fontWeight: "500",
        fontSize: "30px"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default Create;