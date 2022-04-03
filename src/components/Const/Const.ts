const PatternName = '^[A-ZА-ЯЁ]{1}[a-zа-яё-]+$';
const PatternEmail = '\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}';
const PatternPassword = '((?=.*\\d)(?=.*[0-9])(?=.*[A-Z]).{8,40})';
const PatternPhone = '^\\+?[0-9]{10,15}$';
const PatternLogin = '[a-zA-Z0-9-_А-ЯЁа-яё]+';

export {
    PatternEmail,
    PatternName,
    PatternPassword,
    PatternPhone,
    PatternLogin
}