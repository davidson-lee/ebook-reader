import React from 'react';
import { Text, ScrollView, View, Button } from 'react-native';

import { connect } from 'react-redux'

import { requestBooks } from '../../store/actions/bookActions'
import { sessionInit } from '../../store/actions/sessionActions'

import LoadingModal from 'library/components/LoadingModal'
import BookPreview from 'library/components/BookPreview'
import styles from './styles';


class Home extends React.Component {
    static navigationOptions = {
        title: 'My Books',
    }
    constructor(props) {
        super(props)
        this.handleSignOut = this.handleSignOut.bind(this)
    }
    componentDidMount() {
        this.props.requestBooks()
    }
    handleSignOut() {
        this.props.sessionInit()
        this.props.navigation.navigate('Auth')
    }
    render() {
        return (
            <View style={styles.container}>
                <LoadingModal 
                    visible={this.props.loading}
                    close={() => null}
                />
                <View style={styles.headerContainer}>
                    <Text style={{flex:1, fontFamily: 'SemiBold', fontSize: 24}}>TEST_USER</Text>
                    <Button
                        onPress={this.handleSignOut}
                        title='Logout'
                    />
                </View>
                <ScrollView style={{flex: 9}} horizontal={true} pagingEnabled={true} scrollEventThrottle={10} >
                    {this.props.books[0] !== null
                        ?   this.props.books.map((book, i) => {
                                return  <BookPreview 
                                            key={i} 
                                            image={book.key} 
                                            data={{
                                                title: book.title,
                                                author: book.author,
                                                date: book.date,
                                                subject: book.subject
                                            }} 
                                        />
                            })
                        :   null
                    }
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books.books,
        loading: state.books.loadingBooks
    }
}

export default connect(mapStateToProps, { requestBooks, sessionInit })(Home)