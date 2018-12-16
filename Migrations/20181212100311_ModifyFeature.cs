﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace vega.Migrations
{
    public partial class ModifyFeature : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Feature_Models_ModelId",
                table: "Feature");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Feature",
                table: "Feature");

            migrationBuilder.RenameTable(
                name: "Feature",
                newName: "Features");

            migrationBuilder.RenameIndex(
                name: "IX_Feature_ModelId",
                table: "Features",
                newName: "IX_Features_ModelId");

            migrationBuilder.AlterColumn<int>(
                name: "ModelId",
                table: "Features",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Features",
                table: "Features",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Features_Models_ModelId",
                table: "Features",
                column: "ModelId",
                principalTable: "Models",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Features_Models_ModelId",
                table: "Features");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Features",
                table: "Features");

            migrationBuilder.RenameTable(
                name: "Features",
                newName: "Feature");

            migrationBuilder.RenameIndex(
                name: "IX_Features_ModelId",
                table: "Feature",
                newName: "IX_Feature_ModelId");

            migrationBuilder.AlterColumn<int>(
                name: "ModelId",
                table: "Feature",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Feature",
                table: "Feature",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Feature_Models_ModelId",
                table: "Feature",
                column: "ModelId",
                principalTable: "Models",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
