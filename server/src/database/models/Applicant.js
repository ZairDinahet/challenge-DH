module.exports = (sequelize, DataTypes) => {
    const Applicant = sequelize.define('Applicant', {
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
        numberPhone: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true        
        },
        linkedIn: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        birthDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(50),
        },
        aboutMe: {
            type: DataTypes.TEXT,
        },
        city: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        country: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
    },
    {
        timestamps: false,
        tableName: 'applicants', 
    })

    Applicant.associate = (models) => {
        Applicant.belongsToMany(models.Profession, {
          as: 'professions',
          through: 'applicantsprofessions',
          foreignKey: 'idApplicant',
          otherKey: 'idProfession',
          timestamps: false
        })
    }
    
    return Applicant;
}