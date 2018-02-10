
class Question {
    constructor() {
        this.initialSetup();
    }

    initialSetup() {
        this.content = null;
        this.id = null;
        this.priority= null;
        this.author = null;
    };

    setupProperties(data) {
        Object.assign(this, _(dict).pick('_id', 'content', 'priority',   'author'));
    };

};
