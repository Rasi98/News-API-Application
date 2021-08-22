import React, {Component} from 'react'
import axios from "axios";
import {Container,Card,Button,Row,Col,Navbar} from "react-bootstrap";
import {Link, Paper} from "@material-ui/core";

class News extends Component{
    constructor(props) {
        super(props);
        this.state = {
            news:[]
        }
    }

    //Get data from News-API
    componentDidMount() {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=2e7f2067d8d648fda311d499ff3d12ea")
            .then((res)=>{
                const a=res.data.articles;
                this.setState({news:a})
            })
    }

    //Map news items to card components
    newslist=()=>{
        return this.state.news.map((item)=>{
            return(
                <Col xs={12} sm={6} md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.urlToImage} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Link target={'_blank'} href={item.url}><Button variant="outline-info">More</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            );
        })
    }

    render() {
        return(
            <React.Fragment>
                <Navbar sticky="top" expand="lg" bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand style={{fontWeight:'bold'}}>US NEWS</Navbar.Brand>
                    </Container>
                </Navbar>
            <center>
                <Paper elevation={3} style={{padding:'2%',margin:'2%'}}>
                <Row>
                     {this.newslist()}
                </Row>
                </Paper>
            </center>
            </React.Fragment>
        );
    }
}

export default News;