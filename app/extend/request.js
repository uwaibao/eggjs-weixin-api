module.exports = {
    input(_name = '', _default = '') {
        var method = 'param';
        if (_name.split('.').length == 2) {
            method = _name.split('.')[0];
            _name = _name.split('.')[1];
        }
        var input = [];
        switch (method) {
            case 'get':
                input = this.query;
                break;
            case 'post':
                input = this.body;
                break;
            case 'param':
                switch (this.method) {
                    case 'POST':
                        input = this.body
                        break;
                    default:
                        input = this.query;
                }
                break;
            default:
                return input;
        }
        var data = [];
        if (_name == '') {
            data = input
        } else {
            data = _default == '' ? input[_name] : _default
        }
        return data;
    },





};