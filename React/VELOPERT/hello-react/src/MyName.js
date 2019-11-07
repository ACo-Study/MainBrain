import React from 'react';

class MyName extends React.Component {
    render() {
        return (
            <div>
                <table border="1">
                    <tr>
                        <td>안녕하세요! 제 이름은 {this.props.name} 입니다.</td>
                    </tr>
                </table>
            </div>
        );
    }
};

export default MyName;