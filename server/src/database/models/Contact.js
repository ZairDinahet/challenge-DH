module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define('Contact', {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        message: {
            type: DataTypes.TEXT(),
            allowNull: true,
        }
        ,
        image: {
            type: DataTypes.STRING(50),
        },  
    },
    {
        timestamps: false,
        tableName: 'contacts', 
    })
    
    return Contact;
}