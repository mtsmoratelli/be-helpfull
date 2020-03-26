import React, {useState, useEffect} from 'react';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"
import { View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents () {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDetail(incident){
        navigation.naviga('Detail', { incident });
    }

    async function loadIncidents() {
        if (loading) {
            return;
        }

        if (tatal > 0 && incidents.length == total){
            return;
        }
        setLoading(true);

        const reponse = await api .get('incidents', {params: {page} });
        
        setIncidents([... incidents, ...respone.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(()=> {
        loadIncidents();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={style.headerTextBold}>{total} casos. </Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                style={styles.incidentList} 
                data={incidents}
                keyExtractor={ incident => String(incident.id)}
                showsVerticalScrollIndicator={false} //retira as barras de rolagem
                onEndReached={ loadIncidents }
                onEndReachedThreshold= {0.2}
                renderItem={ ( { item: incident } ) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.description}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.description}>{incident.title}</Text>
                    
                        <Text style={styles.incidentProperty}>Valor</Text>
                        <Text style={styles.description}>{Intl.NumberFormat('pt-BR', { 
                            style: 'currency', 
                            currency: 'BRL'
                            }).format(incident.value)}
                        </Text>

                    <TouchableOpacity 
                        style={styles.detailsButton}
                        onPress={ () => navigateToDetail(incident) }>
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02141" />
                    </TouchableOpacity>
                </View>
                ) }
            />
        </View>
    );
}