﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using examproject.Data;

#nullable disable

namespace examproject.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20241203103140_first")]
    partial class first
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("examproject.model.Login", b =>
                {
                    b.Property<int>("userid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("userid"));

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("post")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("userid");

                    b.ToTable("Logins");
                });

            modelBuilder.Entity("examproject.model.Option", b =>
                {
                    b.Property<int>("opnid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("opnid"));

                    b.Property<int>("Questionid")
                        .HasColumnType("int");

                    b.Property<string>("ansr")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("opn1")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("opn2")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("opn3")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("opn4")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("opnid");

                    b.ToTable("Options");
                });

            modelBuilder.Entity("examproject.model.Question", b =>
                {
                    b.Property<int>("questionid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("questionid"));

                    b.Property<string>("Questionname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("questionid");

                    b.ToTable("Questions");
                });
#pragma warning restore 612, 618
        }
    }
}
