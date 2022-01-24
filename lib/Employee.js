function Employee(name, email = '') {
    this.name = name;
    
    this.id = Math.floor(Math.random() * 10 + 95);
    // this.email = email;
}

module.exports = Employee