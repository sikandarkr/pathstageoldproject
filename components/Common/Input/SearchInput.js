import React from 'react';
import {SearchOutlined} from '@ant-design/icons';
class SearchInput extends  React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			query: '',
                        results: {},
                        loading: false,
                        message: '',
		};
	}
	render() {
        const {placeholderText,id,value,changeHandler} = this.props;
		return (
			<div className="container search-input-container">
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						value={value}
						id={id}
                        placeholder={placeholderText}
                        onChange={changeHandler}
					/>
					<SearchOutlined className="search-icon"/>
				</label>
			</div>
			)
	}
}
export default SearchInput;