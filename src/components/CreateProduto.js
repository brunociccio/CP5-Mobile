const CreateProduto = () => {
    const { addProduto } = useProduto();
    const [nome, setNome] = useState('');
  
    const handleSubmit = () => {
      if (!name) {
        Alert.alert('Erro', 'Por favor, insira valores válidos.');
        return;
      }
      addProduto(name);
      setNome('')
      Alert.alert('Sucesso', 'Transação adicionada!');
    };
  
    return (
      <View>
        <TextInput
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        
        <Button title="Adicionar Produto" onPress={() => {handleSubmit(); }} />
      </View>
    );
  };
  
  export default CreateProduto;