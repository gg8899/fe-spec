module.exports = {
    parserPreset: 'conventional-changelog-conventionalcommits',
    /* 
    Level [0..2]：0禁用规则。因为1它将被视为2错误警告。
    适用 always|never：never反转规则。
    Value：用于此规则的值。
    */
    rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 100],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-case': [0],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore', 'revert']],
    }
}