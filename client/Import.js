import { StyleSheet, Button, View, Text, TextInput } from 'react-native';
import axios from 'axios';
import { useState } from 'react';

const Import = () => {

    const [mnemonic, setMnemonic] = useState("");
    const [walletAd, setWalletAd] = useState("");
    const [render, setRender] = useState(0);

    const importWallet = () => {
        axios.post("http://localhost:3001/import", { mnemonic }).then((response) => {
            setWalletAd(response.data)
        });
    }

    return (
        <View style={styles.importContainer}>
            {render === 0 ?
                <Button title="Import Wallet"
                    onPress={() => setRender(1)} /> :
                <View>
                    {walletAd === "" ? 
                    <View>
                        <TextInput style={styles.input}
                        onChangeText={setMnemonic}
                        value={mnemonic}
                        placeholder="Enter 12 Seed Phrases" />
                    <Button
                        title="Import Wallet"
                        onPress={importWallet} />
                    </View>  :
                    <View>
                        <Text>Wallet Address</Text>
                        <Text>{walletAd}</Text>
                    </View> 
                }
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    importContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: "column",
        alignItems: 'center'
    },
    text: {
        fontWeight: "500",
        fontSize: 30
    },
    input: {
        height: '40px',
        width: '320px',
        margin: '12px',
        borderWidth: '1px',
        padding: '10px'
    }
});

export default Import;