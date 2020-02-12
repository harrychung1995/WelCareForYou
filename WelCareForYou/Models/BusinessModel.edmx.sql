
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 09/11/2019 22:48:05
-- Generated from EDMX file: C:\Users\harry\source\repos\CiciJiangKeepCalm\WelCareForYou-IT2\WelCareForYou\WelCareForYou\Models\BusinessModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [BusinessDB];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_HouseSuburb]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Houses] DROP CONSTRAINT [FK_HouseSuburb];
GO
IF OBJECT_ID(N'[dbo].[FK_ClientSuburb]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Clients] DROP CONSTRAINT [FK_ClientSuburb];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Clients]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Clients];
GO
IF OBJECT_ID(N'[dbo].[Suburbs]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Suburbs];
GO
IF OBJECT_ID(N'[dbo].[Houses]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Houses];
GO
IF OBJECT_ID(N'[dbo].[SuperComapanies]', 'U') IS NOT NULL
    DROP TABLE [dbo].[SuperComapanies];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Clients'
CREATE TABLE [dbo].[Clients] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [AgeGroup] nvarchar(max)  NOT NULL,
    [Gender] nvarchar(max)  NOT NULL,
    [NumOfRoom] int  NOT NULL,
    [Salary] int  NOT NULL,
    [SuburbSuburbName] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Suburbs'
CREATE TABLE [dbo].[Suburbs] (
    [SuburbName] nvarchar(max)  NOT NULL,
    [AreaName] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Houses'
CREATE TABLE [dbo].[Houses] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [NumOfRoom] int  NOT NULL,
    [MediumPrice] int  NOT NULL,
    [HouseType] nvarchar(max)  NOT NULL,
    [SuburbSuburbName] nvarchar(max)  NOT NULL,
    [DiffPercent] int  NULL
);
GO

-- Creating table 'SuperComapanies'
CREATE TABLE [dbo].[SuperComapanies] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [SuperName] nvarchar(max)  NOT NULL,
    [Website] nvarchar(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Clients'
ALTER TABLE [dbo].[Clients]
ADD CONSTRAINT [PK_Clients]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [SuburbName] in table 'Suburbs'
ALTER TABLE [dbo].[Suburbs]
ADD CONSTRAINT [PK_Suburbs]
    PRIMARY KEY CLUSTERED ([SuburbName] ASC);
GO

-- Creating primary key on [Id] in table 'Houses'
ALTER TABLE [dbo].[Houses]
ADD CONSTRAINT [PK_Houses]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'SuperComapanies'
ALTER TABLE [dbo].[SuperComapanies]
ADD CONSTRAINT [PK_SuperComapanies]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [SuburbSuburbName] in table 'Houses'
ALTER TABLE [dbo].[Houses]
ADD CONSTRAINT [FK_HouseSuburb]
    FOREIGN KEY ([SuburbSuburbName])
    REFERENCES [dbo].[Suburbs]
        ([SuburbName])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_HouseSuburb'
CREATE INDEX [IX_FK_HouseSuburb]
ON [dbo].[Houses]
    ([SuburbSuburbName]);
GO

-- Creating foreign key on [SuburbSuburbName] in table 'Clients'
ALTER TABLE [dbo].[Clients]
ADD CONSTRAINT [FK_ClientSuburb]
    FOREIGN KEY ([SuburbSuburbName])
    REFERENCES [dbo].[Suburbs]
        ([SuburbName])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ClientSuburb'
CREATE INDEX [IX_FK_ClientSuburb]
ON [dbo].[Clients]
    ([SuburbSuburbName]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------