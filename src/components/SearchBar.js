import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';


class SearchBar extends React.Component {
    state = {
        termFromSearchBar: '',
    }

    handleChange = (event) => {
        this.setState({
            termFromSearchBar: event.target.value,
        });
    }

    handleSubmit = (event) => {
        const { termFromSearchBar } = this.state;
        const { onSubmit } = this.props;

        onSubmit(termFromSearchBar);

        event.preventDefault();
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <div>
                <InputGroup>
                    <FormControl placeholder="Type something to search..." onChange={this.handleChange}/>
                </InputGroup>
                </div>
            </Form>
        )
    }
}

export default SearchBar;
