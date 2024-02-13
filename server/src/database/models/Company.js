module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(50),
        },
        activeNotices: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: 'companies', 
    })

    return Company;
}